# Interaction Verification Report

| Behavior | Result | Evidence / limitation |
| --- | --- | --- |
| Evidence Viewer Escape | Implemented | Keyboard handler closes the dialog. Manual browser verification remains required. |
| Evidence Viewer focus trap | Implemented | Tab and Shift+Tab cycle the dialog’s focusable controls. |
| Evidence origin restoration | Implemented | The previously focused element is restored on close. |
| Mobile evidence scrolling | Implemented | Dialog uses a full-height scrollable sheet at narrow widths. |
| Reduced motion | Implemented | Existing `prefers-reduced-motion` rule disables transitions and smooth scrolling. |
| Browser Back/Forward state restoration | Implemented, static-test verified | URL query state tracks `spiral`, `explore`, and `evidence`; `popstate` restores all three. Manual browser verification remains required. |
| Selected Spiral node restoration | Implemented, static-test verified | The selected valid node is restored from `spiral`; invalid query values safely clear it. |
| Technical anchor navigation | Implemented, build-verified | Sections carry stable source-backed IDs; manual browser-anchor verification remains required. |
| Keyboard navigation of architecture map | Implemented by native buttons | Manual assistive-technology testing remains required. |
| V7 artwork-region and row synchronization | Implemented, static-test verified | The same seven source IDs drive positioned image regions and navigator rows; hover/focus updates the shared highlight and click opens the shared drawer. |
| V7 desktop/mobile browser captures | PARTIAL | The default desktop page rendered and was inspected in local Chromium. A deep-linked selected-state Chromium capture still returned a blank frame despite a healthy response, so manual selected-state and mobile capture remains required. |
| V9 selected desktop workspace | Implemented, static-test and build verified | Selection keeps stage, compact navigator, and an independently scrollable inspection panel inside the architecture section. |
| V9 hover/focus synchronization | Implemented, static-test verified | Artwork regions, DOM annotations, and rows share the same layer ID and highlight state. |
| V9 focus restoration | Implemented | Closing an inspection returns focus to the button that opened it when one is available. Manual browser verification remains required. |
| V9 responsive inspection | Implemented, CSS verified | The desktop inspector is section-bounded; the narrow view is a fixed bottom sheet. Manual visual verification remains required. |
