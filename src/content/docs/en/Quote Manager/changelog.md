---
title: "Changelog"
sidebar:
  order: 99
---

## 2.4.0 (2024-05-03)

This version revisit how subtotals work by removing the header counter-part. Products are now automatically selected when the quantity is changed in the search grid and you can click to select/deselect a product (instead of using the checkbox!).

### Added

- Context menu entry for subtotals. (#811)
- Additional url column **crmd_url** for website link on each quote product line. Each product line displays a **globe icon** (:globe_with_meridians:) that can be clicked. A dialog pops up allowing the user to enter the url. If the url is valid, you can <kbd>CTRL</kbd> + <kbd>Click</kbd> the globe to navigate to the url. The same column exists for the product table and if it contains data it will populate the quote product automatically when adding it to a quote. (#810)
- Title column **crmd_title** on the quote header. This field will be displayed in place of the old _Search Grid_ and _Price Management Grid_ at the top left of the quote manager window. (#089)
- Missing translation for the alert when more than one product is returned. This happens when trying to add the products without searching.

### Changed

- Subtotals now respond to the **crmd_extendedsalesdiscountedpriceincterms** field. If the field is configured and <u>visible</u> the subtotal will roll up the price including terms, otherwise it takes the normal extended discounted price. Two new localised labels have been added: `editor.tools.subtotal.label` and `editor.tools.subtotal.labelwithterms`, both need to be added to the translation file and imported in the system. (#814)
- Subtotals headers no longer function and subtotal footers now sum up to the nearest subtotal (if one is found) or to the top of the quote. (#811)
- In the search grid products are now selected/deselected by clicking on them. To edit the quantity of a product, simply click on the pencil and make your changes. When the changes are confirmed the product is also automatically selected.

### Removed

- Subtotal headers are now removed. (#811)
- Translations related to the title. (#809)

### Fixed

- Subtotals can now be safely duplicated. (#811)
- The recalculate plugin can now detect subtotals correctly. (#811)
- **crmd_make** column would throw an error when is not configured in the search grid.
- Comments, subtotals and sections would not flag the quote product correctly when a picture is attached.
- Width of the editor control to display the edito and delete icon horizontally rather than vertically.
- "New" subtotals could not be deleted using the bulk delete action.
