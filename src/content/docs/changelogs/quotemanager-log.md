---
title: 'Quote Manager'
---

## 2.7.2 (2024-10-08)

### Fixed

- Quote Header totals were not updating if prices were refreshed using the prompt that appears after cloning. (#864)

---

## 2.7.1 (2024-09-26)

### Added

- Added optional Account filter to Quote Line History. (#860)

### Changed

- Make and Category drop-downs in search grid follow proper numeric sorting. (#861)
- Percentage and price fields are no longer fixed to 2dp.

### Fixed

- Dragging configurations within the quote no longer breaks the grid layout. (#859)
- Quote Line History state management issue. History data relating to the first product viewed would be shown for all subsequently viewed lines. (#862)

---

## 2.7.0 (2024-09-04)

### Added

- Added colours for different quote line types. (#858)
- Added insert section button to toolbar on price management grid. (#850)
- Added section and pagebreak options to context menu. (#850)

### Changed

- Pagebreaks are now allowed within sections. (#851)
- Pagebreaks are indicated with a dashed red line below the selected line. (#852)

### Fixed

- Section toggle did not detach child lines when deselected. Toggle functionality has been removed and icon only appears on section lines. (#857)

---

## 2.6.0 (2024-07-25)

### Added

- Ability to default visibility and calculation exclusion for bundled items.

### Fixed

- Issue with calculated fields when a default value was set to an expression.
- Search results when using anything other than the global search will now be returned in the same order as they were typed.

---

## 2.5.1 (2024-06-21)

### Added

- Ability to hide and/or exclude from calculations, suggestions by default.

### Fixed

- Spanish translations containing unwanted characters.
- Search grid would jump to the top when selecting or deselecting an item. (#836)
- Refresh prices dialog would error when no price list is selected and the system is configured not to use price list items. (#835)
- Subtotals now do not include **Configuration** items in their calculation. (#838)

## 2.5.0 (2024-06-19)

Added "required suggestions", prompt to refresh prices and missing translations.

### Added

- Refresh prices prompt when selecting an account after cloning the quote. (#830)
- Product suggestions can now be marked as **required**. These suggestions will be automatically added together with the quote product and can be manually removed if not needed. (#833)
- Added default search configuration option (Preview). (#828)
- Missing translations for closing and locking a quote.
- German translations (Dialogs and Quote Header form). (#834)
- Spanish translations (Dialogs and Quote Header form). (#834)
- Japanese translations (Dialogs and Quote Header form). (#834)

### Fixed

- The **Allow Cost Price Change** now works as expected and takes into account the user security privileges. A red padlock is displayed whenever the cost price cannot be edited by the user. (#829)

---

## 2.4.0 (2024-05-03)

This version revisit how subtotals work by removing the header counter-part. Products are now automatically selected when the quantity is changed in the search grid and you can click to select/deselect a product (instead of using the checkbox!).

### Added

- Context menu entry for subtotals. (#811)
- Additional url column **crmd_url** for website link on each quote product line. The product line displays a **globe icon** that can be clicked and a dialog pops up allowing the user to enter the url. If the url is valid, you can <kbd>CTRL</kbd> + Click the globe to navigate to the url. The same column exists for the product table and if it contains data it will populate the quote product automatically when adding it to a quote. (#810)
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
