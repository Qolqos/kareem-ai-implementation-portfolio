# Evidence Renderer Coverage Report

| Artifact type | Viewer state | Evidence rule |
| --- | --- | --- |
| `ImageArtifact` / `VideoArtifact` | Exact capture-slot card when absent | Never represents the slot as captured media. |
| `TestArtifact` | Test-receipt state | Describes reviewed fixture/source evidence without fabricating raw test output. |
| `DataArtifact` | Structured-data state | States identifier review and raw-record withholding. |
| `PipelineArtifact` | Input → process → output state | Requires the specified synthetic demonstration. |
| Report / code / comparison | Not present in current public artifact registry | Add only with an approved, public-safe derivative and a source-specific renderer. |

Open capture requirements are retained in the artifact `slot` field (for example `S1-C01`, `CC-C03`, `PS-C01`, `Q-C01`, and `AMC-C01`).
