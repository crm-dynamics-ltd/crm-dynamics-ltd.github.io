---
title: "Changelog"
date: "2024-04-29T11:00:54+01:00"
---

## 2.4.0 (2024-04-24)

### Added

- (#811) Context menu entry for subtotals.
- (#810) Additional url column (`crmd_url`) for website link on each quote product line. Each product line displays a **globe icon** (:globe_with_meridians:) that can be clicked. A dialog pops up allowing the user to enter the url. If the url is valid, one can `CTRL + Click` the globe to navigate to the url. The same column exists for the product table and if it contains data it will populate the quote product automatically when adding it to a quote.
- (#089) Title column (`crmd_title`) on the quote header. This field will be displayed in place of the old _Search Grid_ and _Price Management Grid_ at the top left of the quote manager window.
- Missing translation for the alert when more than one product is returned. This happens when trying to add the products without searching.

### Changed

- (#811) Subtotals headers no longer function and subtotal footers now sum up to the nearest subtotal (if one is found) or to the top of the quote.
- In the search grid products are now selected/deselected by clicking on them. To edit the quantity of a product, simply click on the pencil and make your changes. When the changes are confirmed the product is also automatically selected.

### Removed

- (#811) Subtotal headers are now removed.
- (#809) Translations related to the title.

### Fixed

- (#811) Subtotals can now be safely duplicated.
- (#811) The recalculate plugin can now detect subtotals correctly.
- `crmd_make` column would throw an error when is not configured in the search grid.
- Comments, subtotals and sections would not flag the quote product correctly when a picture is attached.
