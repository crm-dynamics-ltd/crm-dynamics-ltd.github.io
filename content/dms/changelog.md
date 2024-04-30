---
title: "Changelog"
date: "2024-04-29T11:02:13+01:00"
weight: 999
---

## 0.7.2 (2024-04-29)

### Added

- Added a more flexible system to perform mail merge. The system can now mail merge from **file** and **image** columns. See [Mail Merge Guide](/dms/mail-merge#files-and-images) for more information.

### Changed

- Envelopes are now locked by Dynamics after they are signed. This leads to less errors due to api latency.

### Fixed

- Issue that prevented to create a new template from the dialog.
- Formatting for the CSS and FetchXml editors.
- Logo missing on the envelope page.
