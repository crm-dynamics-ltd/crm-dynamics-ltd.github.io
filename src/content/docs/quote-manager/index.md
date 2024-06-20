---
title: Configuration
---

## Search

:::note
The following feature is in preview and cannot be configured in the UI.
:::

To configure the default search option you need to use advanced find to search for CRMD Setting where the key equals to **SearchSettings** and add the `defaultSearchOption` followed by the **logical name** of the column to the value. See below for an example.

```json title="SearchSettings"
{
  "AdditionalSearchFields": [
    // Fields omitted for brevity
  ],
  "searchDefaults": {
    "mode": "contains", // Can be set to equal or contains
    "column": "prefix_column", // Logical name of the column
    "additionalFilters": [
      {
        "id": "Standard",
        "value": true
      },
      {
        "id": "MainUnits",
        "value": true
      },
      {
        "id": "Configurations",
        "value": true
      },
      {
        "id": "Choice",
        "value": true
      },
      {
        "id": "DiscountListOnly",
        "value": false
      }
    ]
  }
}
```
