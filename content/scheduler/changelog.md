---
title: "Changelog"
date: "2024-04-29T11:03:46+01:00"
weight: 99
---

## 0.8.1 (2024-03-20)

### Fixed

- (#802) Fixed GroupBy option for the items settings sometimes would prevent them from being saved.
- Options are not correctly filtered to the supported types.

---

## 0.8.0 (2024-03-14)

### Added

- (#798) Changelog page.
- Business hours and weekends preference are now saved and persisted between browser sessions.
- (#797) Added a warning when more than 5000 records are retrieved.
- (#796) Unscheduled item can now be opened by double clicking on them.
- Settings are now only accessible by system administrators

### Changed

- (#795) Date range picker to single date. The timeline now jumps to a week view, starting with the date picked.
- (#796) Unscheduled items now must be dragged by the handle to the timeline.

### Removed

- (#801) Items dragged from the drawer no longer have a ghost image.

### Fixed

- (#793) Business hours and weekends now work independently.
- (#794) Adding items via context menu now clamps the start time to the nearest 30 mins and defaults the duration to 30 mins too. For example: Adding an item at 12:12 will round down to 12:00 and set the end date to 12:30.
- (#799) Creating a new timeline item now shows the resource name in the Dynamics form.
- Missing tooltips for changelog and settings buttons.
- (#800) Added loading indicators on the first page and when saving settings.
