// Reviewed aggregate derivatives. Originals are retained outside the public directory.
export type VerificationReceipt = { executionDate: string; runId?: string; environment: string; result: string; scope: string; versionBinding: string; evidenceGrade: string; sources: { label: string; hash: string; hashMethod: string }[]; metrics?: { label: string; value: string }[]; checks?: { name: string; result: string }[]; tables?: { title: string; columns: string[]; rows: string[][] }[]; excerpts?: { title: string; text: string }[]; conditions?: string[]; limitations: string[] };
export const verificationReceipts: Record<string, VerificationReceipt> = {
  "s1-fhra": {
    "executionDate": "2026-10-07T13:58:45.499Z",
    "environment": "Isolated route-contract fixture in the local Spiral One host",
    "result": "One fixture repair applied; local checks passed; convergence recorded as resolved.",
    "scope": "A deliberately broken route response contract.",
    "versionBinding": "Application source revision was not recorded. This historical result does not certify the current complete application.",
    "evidenceGrade": "A — Strong for the scoped fixture",
    "sources": [
      {
        "label": "Recorded route-contract fixture audit",
        "hash": "24aeb2b85dc2e357c9bcc3bbe3b0f93ee66e0ce1624887115e4782304e4515a7",
        "hashMethod": "file SHA-256"
      },
      {
        "label": "Formatted fixture report",
        "hash": "c80989c3ec1b3c7d5f153b9c3740191e5ac058b3e3b74b7e2ae0e4453d250201",
        "hashMethod": "file SHA-256"
      },
      {
        "label": "Fixture and separate live-scan smoke record",
        "hash": "f1fcfd5323471fd94eeb147f67c4ddfd30f85e0d69bd80c8756785b41c43ef9a",
        "hashMethod": "file SHA-256"
      },
      {
        "label": "Preserved fixture before repair",
        "hash": "7a20733598f053facd2d92820a541909adb54c3482bbbf3aeaabdc6cd2b4041d",
        "hashMethod": "file SHA-256"
      },
      {
        "label": "Preserved fixture after repair",
        "hash": "a9b3ed7c827085f5effe6e2e235bfac50b49f8dbc982803aa20113db9e7a073d",
        "hashMethod": "file SHA-256"
      }
    ],
    "metrics": [
      {
        "label": "Applied fixture repairs",
        "value": "1"
      },
      {
        "label": "Separate live-scan fixes",
        "value": "0"
      }
    ],
    "checks": [
      {
        "name": "preserve_route_export",
        "result": "pass"
      },
      {
        "name": "preserve_response_contract",
        "result": "pass"
      },
      {
        "name": "preserve_patch_scope",
        "result": "pass"
      },
      {
        "name": "dependency_helper_exists",
        "result": "pass"
      },
      {
        "name": "route_export_present",
        "result": "pass"
      },
      {
        "name": "spiral_ok_present",
        "result": "pass"
      },
      {
        "name": "raw_next_response_removed",
        "result": "pass"
      }
    ],
    "excerpts": [
      {
        "title": "Before repair — preserved fixture",
        "text": "import { NextResponse } from 'next/server';\n\nexport async function GET() {\n  return NextResponse.json({\n    status: 'ok',\n    routeId: 'fhra-fixture-route',\n    contract: 'raw_next_response',\n  });\n}\n"
      },
      {
        "title": "After repair — preserved fixture",
        "text": "import { spiralOk } from '@/spiral-one/api/response';\n\nexport async function GET() {\n  return spiralOk({\n    status: 'ok',\n    routeId: 'fhra-fixture-route',\n    contract: 'spiral_ok',\n  });\n}\n"
      }
    ],
    "limitations": [
      "Fixture evidence; no production incident or full recursive cross-scale correction is established.",
      "The final report has an empty initial issue inventory; the preserved files establish the bounded correction.",
      "A global score is not an independent certification of the complete runtime."
    ]
  },
  "s1-reference": {
    "executionDate": "2026-10-06T20:38:16.687Z",
    "environment": "Local Reference Intelligence check process",
    "result": "9 of 9 recorded checks passed.",
    "scope": "Archive integrity, routing and bounded brief generation.",
    "versionBinding": "Application source revision was not recorded. This historical result does not certify the current complete application.",
    "evidenceGrade": "B — Useful; version and downstream trace absent",
    "sources": [
      {
        "label": "Recorded Reference Intelligence check report",
        "hash": "f673af51fa3ecefb30add81060fdf2913658c6d38ef68fa4e88e3695c5f9fda3",
        "hashMethod": "file SHA-256"
      }
    ],
    "metrics": [
      {
        "label": "Objects included",
        "value": "6"
      },
      {
        "label": "Brief characters",
        "value": "5611"
      },
      {
        "label": "Character budget",
        "value": "6000"
      },
      {
        "label": "Recorded model expenditure",
        "value": "0"
      }
    ],
    "checks": [
      {
        "name": "archive_integrity",
        "result": "pass"
      },
      {
        "name": "sources_present",
        "result": "pass"
      },
      {
        "name": "atomic_objects_present",
        "result": "pass"
      },
      {
        "name": "ingestion_manifests_present",
        "result": "pass"
      },
      {
        "name": "router_skips_non_design_work",
        "result": "pass"
      },
      {
        "name": "multidimensional_design_brief_is_bounded",
        "result": "pass"
      },
      {
        "name": "phase_awareness_changes_retrieval_intent",
        "result": "pass"
      },
      {
        "name": "experience_intent_survives_routing_and_brief",
        "result": "pass"
      },
      {
        "name": "design_fhra_evidence_integrity",
        "result": "pass"
      }
    ],
    "limitations": [
      "A bounded design-brief pilot; no linked completed implementation proves use of that exact brief.",
      "These checks do not establish downstream model quality or user outcomes."
    ]
  },
  "cc-test": {
    "executionDate": "2026-10-06T17:57:17.264-0400",
    "environment": "iOS Simulator · XCTest",
    "result": "20 recorded tests passed; zero failures.",
    "scope": "Synthetic offer parsing, scoring, correction stabilization and log reconciliation.",
    "versionBinding": "Application source revision was not recorded. This historical result does not certify the current complete application.",
    "evidenceGrade": "B — Useful; invocation and source revision incomplete",
    "sources": [
      {
        "label": "Retained XCTest result bundle",
        "hash": "886b6523a2b740d752151397991177a5179fd5176e21365c67d68c8c941a3d07",
        "hashMethod": "bundle manifest SHA-256"
      }
    ],
    "metrics": [
      {
        "label": "Recorded tests",
        "value": "20"
      },
      {
        "label": "Failures",
        "value": "0"
      }
    ],
    "checks": [
      {
        "name": "testClearlyDifferentMerchantsRemainSeparateOffers()",
        "result": "Success"
      },
      {
        "name": "testCompoundTripTotalUsesCanonicalDuration()",
        "result": "Success"
      },
      {
        "name": "testCorrectedObservationUpdatesSameLoggedOffer()",
        "result": "Success"
      },
      {
        "name": "testDeadZoneSignalFlagsLongQuietGap()",
        "result": "Success"
      },
      {
        "name": "testDecisionInsightFlagsLowHourlyRisk()",
        "result": "Success"
      },
      {
        "name": "testGeographicSignalFindsParkingRisk()",
        "result": "Success"
      },
      {
        "name": "testIncompleteLaterObservationCannotEraseKnownDuration()",
        "result": "Success"
      },
      {
        "name": "testLongLowHourlyOfferDoesNotScoreGreen()",
        "result": "Success"
      },
      {
        "name": "testLowDollarPerMileScoresRed()",
        "result": "Success"
      },
      {
        "name": "testMarkMostRecentOfferTaken()",
        "result": "Success"
      },
      {
        "name": "testMerchantInsightsAggregateCounts()",
        "result": "Success"
      },
      {
        "name": "testOfferCardDoesNotParseAsTakenRide()",
        "result": "Success"
      },
      {
        "name": "testOfferQualityAnalyticsCountsAndWaits()",
        "result": "Success"
      },
      {
        "name": "testParsesOfferText()",
        "result": "Success"
      },
      {
        "name": "testParsesTakenRideScreen()",
        "result": "Success"
      },
      {
        "name": "testPartialDurationMustStabilizeBeforeCommit()",
        "result": "Success"
      },
      {
        "name": "testSingleOfferDoesNotInventAnHourlyPace()",
        "result": "Success"
      },
      {
        "name": "testStatusBarFragmentIsNotMerchant()",
        "result": "Success"
      },
      {
        "name": "testStrongOfferScoresGreen()",
        "result": "Success"
      },
      {
        "name": "testTripRadarUsesActualDeliveryPayout()",
        "result": "Success"
      }
    ],
    "limitations": [
      "Fixture regression evidence; live Vision OCR accuracy, notification delivery and field reliability are unverified by this run.",
      "The original result was retained from temporary storage; a private snapshot now preserves it."
    ]
  },
  "ps-benchmark": {
    "executionDate": "2026-09-22",
    "environment": "Physical iPhone 16e / iPhone17,5 · iOS 26.6.1 · llama.cpp b10549",
    "result": "Qwen3 Q8: 10/10 exact checks. Qwen3 Q4: 9/10 exact checks. Each suite completed 20 cases.",
    "scope": "Short local GGUF inference suites with recorded outputs and resource samples.",
    "versionBinding": "Application source revision was not recorded. This historical result does not certify the current complete application.",
    "evidenceGrade": "A — Strong for the bounded measurements",
    "sources": [
      {
        "label": "Physical-device summary",
        "hash": "8a12cec12a0501ab6c10b32a76e0b1399839c23524de4126d098df1f62703c98",
        "hashMethod": "file SHA-256"
      },
      {
        "label": "Qwen3 0.6B / Q8_0 physical baseline",
        "hash": "8f8112ce8b0dba746ad354c291a47463130919a170c9032226b4518d13f60f32",
        "hashMethod": "file SHA-256"
      },
      {
        "label": "Qwen3 0.6B / Q4_0 physical baseline",
        "hash": "a5bb054cb523d8d867c0abcf5b36645b069a0ca8b04a5a9189cb24d0418f85ce",
        "hashMethod": "file SHA-256"
      }
    ],
    "tables": [
      {
        "title": "Physical-device suites",
        "columns": [
          "Model",
          "Completed cases",
          "Exact checks",
          "Failed checks"
        ],
        "rows": [
          [
            "Qwen3 0.6B / Q8_0",
            "20",
            "10/10",
            "0"
          ],
          [
            "Qwen3 0.6B / Q4_0",
            "20",
            "9/10",
            "1"
          ]
        ]
      },
      {
        "title": "Recorded resource observations",
        "columns": [
          "Model",
          "Median TTFT",
          "Tokens/s incl. prefill",
          "Peak sampled footprint"
        ],
        "rows": [
          [
            "Qwen3 0.6B / Q8_0",
            "0.095 s",
            "33.09",
            "425.5 MB"
          ],
          [
            "Qwen3 0.6B / Q4_0",
            "0.106 s",
            "47.94",
            "424.2 MB"
          ]
        ]
      },
      {
        "title": "Model identity and run date",
        "columns": [
          "Model",
          "Run started (UTC)",
          "GGUF SHA-256"
        ],
        "rows": [
          [
            "Qwen3 0.6B / Q8_0",
            "2026-09-22T11:51:57Z",
            "361cc68159042c36ebff7715dc5a2e4612153e88f3e9c9c234820849d6dc9e1d"
          ],
          [
            "Qwen3 0.6B / Q4_0",
            "2026-09-22T03:56:07Z",
            "da2572f16c06133561ce56accaa822216f2391ef4d37fba427801cd6736417d4"
          ]
        ]
      }
    ],
    "conditions": [
      "2,048-token context; 256 output-token cap; 2 CPU threads; GPU layers 99; seed 42; temperature 0.7. JSON mode varies by case.",
      "Short charging runs. Resource peaks are sampled; footprint and resident memory are different measurements.",
      "Ten cases per suite have exact scoring; other completed cases have no human ratings."
    ],
    "excerpts": [
      {
        "title": "Qwen3 0.6B / Q4_0 · intent-1 · failed exact check · finish: length · first 160 output characters",
        "text": "{\n  \"intent\": \"rewrite\",\n  \"content\": \"Please make this email shorter. Return JSON {\"}\n  \t\t\t\n \t\t\n \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
      }
    ],
    "limitations": [
      "The Q4 failed intent-classification case and output-limit hit remain part of the result.",
      "Short runs do not establish sustained thermal comfort, battery cost, broad task coverage or general answer quality."
    ]
  },
  "q-migration": {
    "executionDate": "2026-10-08T19:44:28.566Z",
    "environment": "Android host-unit tests · Gradle",
    "result": "17 recorded tests passed; zero failures, errors or skips.",
    "scope": "Versioned local migration, corruption retention, repeated migration, restart and CSV guards.",
    "versionBinding": "Application source revision was not recorded. This historical result does not certify the current complete application.",
    "evidenceGrade": "B — Useful; source revision and full invocation absent",
    "sources": [
      {
        "label": "Recorded Android host-unit test XML",
        "hash": "1ce3499b9be4646bfaae2d7e290179871f1dd9b184709ab042550b9a6785aea0",
        "hashMethod": "file SHA-256"
      }
    ],
    "metrics": [
      {
        "label": "Tests",
        "value": "17"
      },
      {
        "label": "Failures",
        "value": "0"
      },
      {
        "label": "Errors",
        "value": "0"
      },
      {
        "label": "Skipped",
        "value": "0"
      }
    ],
    "checks": [
      {
        "name": "unchangedViewFieldsPreserveV2Selection",
        "result": "pass"
      },
      {
        "name": "unsupportedVersionRejected",
        "result": "pass"
      },
      {
        "name": "csvPrefixesAreGuarded",
        "result": "pass"
      },
      {
        "name": "zeroIsRecorded",
        "result": "pass"
      },
      {
        "name": "corruptV2JsonKeepsOriginalAndBackup",
        "result": "pass"
      },
      {
        "name": "duplicateIdsRejected",
        "result": "pass"
      },
      {
        "name": "singleEventPreservesFields",
        "result": "pass"
      },
      {
        "name": "multipleEventsAndNilOutcomes",
        "result": "pass"
      },
      {
        "name": "corruptLegacyJsonKeepsRawBackupAndNoArchive",
        "result": "pass"
      },
      {
        "name": "rawFileBackupAndReplace",
        "result": "pass"
      },
      {
        "name": "repeatedMigrationIsIdentity",
        "result": "pass"
      },
      {
        "name": "allLegacySkills",
        "result": "pass"
      },
      {
        "name": "deletingOneEventPersistsAcrossRestartAndKeepsOtherEvents",
        "result": "pass"
      },
      {
        "name": "invalidIntensityRejected",
        "result": "pass"
      },
      {
        "name": "jsonAdapterMigratesAndRestartsWithoutDuplication",
        "result": "pass"
      },
      {
        "name": "emptySnapshot",
        "result": "pass"
      },
      {
        "name": "unknownSkillAndStepsSurvive",
        "result": "pass"
      }
    ],
    "limitations": [
      "Host-unit evidence; installed Android-device migration and complete platform parity are not established.",
      "Earlier Android documentation reports 16 passes; this newer October 8 record contains 17.",
      "The historical 21/21 iOS count is documentation-reported; inspected result directories were incomplete.",
      "Migration tests do not establish clinical efficacy, accessibility compliance or comprehensive privacy certification."
    ]
  },
  "amc-import": {
    "executionDate": "2026-10-09T05:14:42.709315+00:00",
    "runId": "RUN_ba541b5c",
    "environment": "Local spreadsheet import · macOS",
    "result": "Completed: 29,453 entries created from 327 conversations across four input files.",
    "scope": "One recorded import, with output counts reconciled against the workbook.",
    "versionBinding": "Application source revision was not recorded. This historical result does not certify the current complete application.",
    "evidenceGrade": "B — Useful; execution counts inspected, parser accuracy unmeasured",
    "sources": [
      {
        "label": "Private import workbook: Run_Log, Summary and counted worksheet rows",
        "hash": "c90424b6338c46c5f0a5a8321890b785de903ccc2cb7c1a969f731d37ef6ed0b",
        "hashMethod": "file SHA-256"
      }
    ],
    "metrics": [
      {
        "label": "Input files",
        "value": "4 · 3 ZIP + 1 JSON"
      },
      {
        "label": "Conversations processed",
        "value": "327"
      },
      {
        "label": "Entries created",
        "value": "29,453"
      },
      {
        "label": "Filtered entries",
        "value": "1,169"
      },
      {
        "label": "Recorded deduplications",
        "value": "0"
      },
      {
        "label": "Recall index rows",
        "value": "8,088"
      },
      {
        "label": "Recorded status",
        "value": "completed"
      },
      {
        "label": "Run log completed (UTC)",
        "value": "2026-10-09T05:15:11.599359+00:00"
      }
    ],
    "tables": [
      {
        "title": "Workbook reconciliation · data rows exclude headers",
        "columns": [
          "Worksheet / record",
          "Actual rows or total",
          "Matches recorded count"
        ],
        "rows": [
          [
            "Memory_Entries",
            "29,453",
            "Yes"
          ],
          [
            "Conversations",
            "327",
            "Yes"
          ],
          [
            "Recall_Index",
            "8,088",
            "Yes"
          ],
          [
            "Summary provider total",
            "29,453",
            "Yes"
          ],
          [
            "Run_Log entries_created",
            "29,453",
            "Yes"
          ]
        ]
      },
      {
        "title": "Provider breakdown · entries, not conversations",
        "columns": [
          "Provider",
          "Created entries"
        ],
        "rows": [
          [
            "ChatGPT",
            "29427"
          ],
          [
            "Claude",
            "16"
          ],
          [
            "Gemini",
            "10"
          ],
          [
            "Total",
            "29,453"
          ]
        ]
      }
    ],
    "excerpts": [
      {
        "title": "Recorded run note",
        "text": "Recall chunks rebuilt: 8088"
      }
    ],
    "limitations": [
      "No failures were explicitly reported in the inspected run record. It has no separate comprehensive failure counter.",
      "Row-count reconciliation verifies completion and output counts; entries were not individually checked for semantic parsing accuracy.",
      "One execution does not establish repeatable throughput or deduplication effectiveness; this run recorded zero deduplications.",
      "The original workbook and conversation-derived portable text remain private. Only aggregate metadata is published."
    ]
  }
};
