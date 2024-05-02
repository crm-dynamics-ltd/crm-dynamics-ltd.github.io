---
title: "Changelog"
date: "2024-04-29T11:02:13+01:00"
weight: 999
---

## 0.8.0 (2024-05-01)

This version sees the addition of File and Image mail merging capabilities to the software. For more information checkout the [Mail Merge Guide](/dms/mail-merge#files-and-images).

### Added

- Added a more flexible system to perform mail merge. The system can now mail merge from **file** and **image** columns.

### Changed

- Envelopes are now locked by Dynamics after they are signed. This leads to less errors due to api latency.
- {{% badge style="warning" %}}Breaking{{% /badge %}} Signee templates must be updated for them to continue working. They now work like any other template, so you need to add a query to retrieve the related signees and add the query to the table and replace the signature mail merge token with the correct one for image mail merging.

### Fixed

- Issue that prevented to create a new template from the dialog.
- Formatting for the CSS and FetchXml editors.
- Logo missing on the envelope page.