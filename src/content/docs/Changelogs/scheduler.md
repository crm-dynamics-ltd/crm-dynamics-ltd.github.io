---
title: 'Scheduler'
---

## 1.0.0 (2024-06-14)

First release! In this version we added the ability to save filters to personal views. These views are stored in the dynamics environment and offer a more permanent way to save and re-use filters.
Filters are also saved every time they are changed and they are stored in the browser local storage. They are applied again each time the scheduler is loaded.

There has been a lot of work in improving the general performance of the application. The scheduler now loads much faster and only retrieves the items for the current view date range.

### Added

- The timeline displays a loading screen when an operation, such as moving an item, is in progress.
- Items are retrieve only within the date range displayed in the timeline. Panning or changing the zoom within the timeline triggers the system to fetch the items with the date range.
- Added resource filtering to allow the selection of resources and groups.
- Filters are persisted in the browser and applied when the scheduler is loaded.
- Filters can be saved as a "personal view".

### Changed

- Users of the scheduler now require the **CRMD Scheduler - User** security role.
- Settings are only accessible by System Administrators.

### Fixed

- Drastically improved the loading time when accessing the scheduler timeline.

---

## 0.8.1 (2024-03-20)

### Fixed

- Fixed GroupBy option for the items settings sometimes would prevent them from being saved. (#802)
- Options are not correctly filtered to the supported types.

---

## 0.8.0 (2024-03-14)

### Added

- Changelog page. (#798)
- Business hours and weekends preference are now saved and persisted between browser sessions.
- Added a warning when more than 5000 records are retrieved. (#797)
- Unscheduled item can now be opened by double clicking on them. (#796)
- Settings are now only accessible by system administrators.

### Changed

- Date range picker to single date. The timeline now jumps to a week view, starting with the date picked. (#795)
- Unscheduled items now must be dragged by the handle to the timeline. (#796)

### Removed

- Items dragged from the drawer no longer have a ghost image. (#801)

### Fixed

- Business hours and weekends now work independently. (#793)
- Adding items via context menu now clamps the start time to the nearest 30 mins and defaults the duration to 30 mins too. For example: Adding an item at 12:12 will round down to 12:00 and set the end date to 12:30. (#794)
- Creating a new timeline item now shows the resource name in the Dynamics form. (#799)
- Missing tooltips for changelog and settings buttons.
- Added loading indicators on the first page and when saving settings. (#800)
