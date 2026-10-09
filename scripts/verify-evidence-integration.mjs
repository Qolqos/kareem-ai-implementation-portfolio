import {readFileSync,existsSync,readdirSync,statSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';
import assert from 'node:assert/strict';
import ts from 'typescript';
const root=new URL('../',import.meta.url),receipts={},registry={};
const load=(source,exports,require)=>new Function('exports','require',ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText)(exports,require);
load(readFileSync(new URL('lib/data/verification-receipts.ts',root),'utf8'),receipts);
load(readFileSync(new URL('lib/data/portfolio-rebuild.ts',root),'utf8'),registry,()=>receipts);
const {verificationReceipts:r}=receipts,{artifacts,projects,spiralExplorations,layer3}=registry;
assert.deepEqual(Object.keys(r).sort(),['s1-fhra','s1-reference','cc-test','ps-benchmark','q-migration','amc-import'].sort());
const ids=new Set(artifacts.map(a=>a.id));
for(const e of [...spiralExplorations,...projects.flatMap(p=>p.explorations),...Object.values(layer3).flat()])assert.ok(ids.has(e.artifact),'Missing association: '+e.artifact);
for(const[id,v]of Object.entries(r)){assert.equal(artifacts.find(a=>a.id===id)?.receipt,v);for(const field of ['executionDate','environment','result','scope','versionBinding','evidenceGrade'])assert.ok(v[field],id+': '+field);assert.ok(v.limitations.length);assert.ok(v.sources.length);for(const s of v.sources)assert.match(s.hash,/^[a-f0-9]{64}$/);}
const metric=(id,label)=>r[id].metrics.find(m=>m.label===label)?.value;
assert.ok(JSON.stringify(r['amc-import']).includes('29,453'));assert.ok(JSON.stringify(r['amc-import']).includes('327'));assert.ok(JSON.stringify(r['amc-import']).includes('1,169'));assert.ok(JSON.stringify(r['amc-import']).includes('8,088'));
assert.ok(JSON.stringify(r['ps-benchmark']).includes('intent-1'));assert.ok(r['s1-fhra'].checks.every(c=>c.result==='pass'));assert.equal(r['cc-test'].checks.length,20);assert.equal(r['q-migration'].checks.length,17);
for(const forbidden of ['/Users/','/private/','.portfolio-internal','.spiral-one'])assert.ok(!JSON.stringify(r).includes(forbidden),'Private path leaked: '+forbidden);
assert.doesNotMatch(JSON.stringify(r),/BEGIN (RSA |EC |OPENSSH )?PRIVATE KEY|(?:sk-proj-|AIza)[A-Za-z0-9_-]{16,}/);
const baseline={};load(execFileSync('git',['show','9c4d854:lib/data/portfolio-rebuild.ts'],{cwd:root,encoding:'utf8'}),baseline);
assert.deepEqual(registry.approvedCopy,baseline.approvedCopy,'Approved home copy changed');
assert.deepEqual(projects.map(({copy,thesis,title,explorations})=>({copy,thesis,title,explorations:explorations.map(({copy,heading,label})=>({copy,heading,label}))})),baseline.projects.map(({copy,thesis,title,explorations})=>({copy,thesis,title,explorations:explorations.map(({copy,heading,label})=>({copy,heading,label}))})),'Approved project copy changed');
assert.deepEqual(spiralExplorations.map(({copy,heading,label})=>({copy,heading,label})),baseline.spiralExplorations.map(({copy,heading,label})=>({copy,heading,label})));
const approvedReplacement='A recorded import produced 29,453 entries from 327 conversations across four input files.';
const canonical=JSON.parse(JSON.stringify(baseline.layer3).replace('The parser workflow has been tested across more than 27,000 combined entries from ChatGPT, Claude and Gemini exports.',approvedReplacement));
for(const slug of Object.keys(layer3))assert.deepEqual(layer3[slug].map(({paragraphs,title})=>({paragraphs,title})),canonical[slug].map(({paragraphs,title})=>({paragraphs,title})));
const manifestPath=new URL('.portfolio-internal/verification-sources/2026-10-09/manifest.json',root);
if(process.argv.includes('--sources')){
 assert.ok(existsSync(manifestPath),'Private source snapshots required');const manifest=JSON.parse(readFileSync(manifestPath));
 const hash=b=>createHash('sha256').update(b).digest('hex');
 const files=(dir,prefix='')=>readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?files(new URL(e.name+'/',dir),prefix+e.name+'/'):[prefix+e.name]).sort();
 for(const s of manifest.sources){
  const file=new URL(s.snapshot,root);
  const entries=s.entries?files(new URL(s.snapshot+'/',root)).map(path=>({path,hash:hash(readFileSync(new URL(path,new URL(s.snapshot+'/',root))))})):null;
  const actual=entries?hash(JSON.stringify(entries)):hash(readFileSync(file));
  assert.equal(actual,s.hash);assert.ok(r[s.receiptId].sources.some(p=>p.hash===actual));
 }
 const wb=new URL('.portfolio-internal/verification-sources/2026-10-09/amc-import/Memory_Save.xlsx',root).pathname;
 const result=JSON.parse(execFileSync('python3',['-c',`import json
from openpyxl import load_workbook
w=load_workbook(${JSON.stringify(wb)},read_only=True,data_only=True)
s={k:v for k,v in w['Summary'].iter_rows(min_row=2,values_only=True) if k is not None}
it=w['Run_Log'].iter_rows(values_only=True);h=next(it);r=dict(zip(h,next(it)))
c={n:sum(1 for row in w[n].iter_rows(min_row=2,values_only=True) if row[0] is not None) for n in ['Memory_Entries','Conversations','Recall_Index']}
print(json.dumps({'rows':c,'run':{k:r[k] for k in ['run_id','status','files_processed','conversations_processed','entries_created','entries_filtered','entries_deduped']},'providers':[s['count_chatgpt'],s['count_claude'],s['count_gemini']]}))`],{encoding:'utf8'}));
 assert.deepEqual(result.rows,{Memory_Entries:29453,Conversations:327,Recall_Index:8088});assert.deepEqual(result.providers,[29427,16,10]);assert.deepEqual(result.run,{run_id:'RUN_ba541b5c',status:'completed',files_processed:4,conversations_processed:327,entries_created:29453,entries_filtered:1169,entries_deduped:0});
 console.log('Source verification passed: 12 snapshots match SHA-256; workbook recounted independently.');
}
console.log('Evidence integration passed: 6 receipts; all associations resolve; approved copy preserved except authorized import wording; privacy metadata checks passed.');
