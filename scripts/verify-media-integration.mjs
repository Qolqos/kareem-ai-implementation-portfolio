import { readFileSync, readdirSync, statSync } from "node:fs";
import ts from "typescript";
import assert from "node:assert/strict";
const root=new URL("../",import.meta.url);
const registry={}, receipts={};
new Function("exports",ts.transpileModule(readFileSync(new URL("lib/data/verification-receipts.ts",root),"utf8"),{compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText)(receipts);
new Function("exports","require",ts.transpileModule(readFileSync(new URL("lib/data/portfolio-rebuild.ts",root),"utf8"),{compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText)(registry,()=>receipts);
const { artifacts, topicMedia, projectDemo }=registry;
assert.equal(new Set(artifacts.map(a=>a.id)).size,artifacts.length);
const captures=artifacts.filter(a=>a.media?.kind==="capture"&&a.media.publication==="approved");
const hero=artifacts.find(a=>a.id==="ps-c01");
assert.equal(captures.length,20+(hero.media.publication==="approved"?1:0));
const allowed=new Set();
for(const a of captures){const m=a.media;assert.ok(m.caption&&m.alt&&m.placement&&m.width&&m.height&&a.limitations);assert.ok(m.assetPath.startsWith("/images/"));const file="public"+m.assetPath;assert.ok(statSync(new URL(file,root)).isFile());allowed.add(file);}
const mapping={"courier-copilot":"MOCmfNjZv4o","pocket-spiral":"79DWDm4dW2s",quel:"NmX-o1WS7O8","ai-memory-card":"ncXs8ty-tdw"};
for(const [slug,id] of Object.entries(mapping))assert.equal(projectDemo(slug)?.media.youtubeId,id);
if(hero.media.publication!=="approved"){assert.equal(hero.media.publication,"pending");assert.equal(hero.media.assetPath,undefined);}
for(const [slug,topic] of [["spiral-one","context"],["spiral-one","council"],["spiral-one","learn"],["spiral-one","recovery"],["courier-copilot","thirty"],["courier-copilot","field"],["pocket-spiral","local"],["pocket-spiral","phone"],["pocket-spiral","hardware"],["quel","choices"],["quel","local"],["ai-memory-card","archive"],["ai-memory-card","portability"]])assert.ok(topicMedia(slug,topic).length,slug+":"+topic);
for(const dir of ["public/images/spiral-one","public/images/courier-copilot","public/images/pocket-spiral","public/images/levo","public/images/ai-memory-card","public/videos"]){for(const file of readdirSync(new URL(dir+"/",root),{recursive:true})){const relative=dir+"/"+file;if(statSync(new URL(relative,root)).isFile())assert.ok(allowed.has(relative),"Unapproved public original: "+relative);}}
const retained=new Set(["public/images/kareem-singleton.jpg","public/images/spiral-one-architecture.png","public/resume/Kareem_Singleton_Resume_2026.pdf"]);
for(const file of readdirSync(new URL("public/",root),{recursive:true})){const relative="public/"+file;if(statSync(new URL(relative,root)).isFile())assert.ok(allowed.has(relative)||retained.has(relative),"Unapproved deployable asset: "+relative);}
const viewer=readFileSync(new URL("components/portfolio/EvidenceViewer.tsx",root),"utf8");assert.ok(viewer.includes("youtube-nocookie.com/embed/")&&viewer.includes("autoplay=0")&&viewer.includes("Open on YouTube"));
console.log("Media integration passed: "+captures.length+" captures, 4 correct demo IDs, hero status "+hero.media.publication+", contextual bindings, complete public allowlist.");
