---
title: "Mail Merge"
weight: 100
---

## Basics

In CRMDocs365, anything that requires calculations or mail merging with data from Dataverse needs to be placed between formula delimiters ${ and }. **This includes mail merge tokens and if statements**.

## Tokens

A token is a placeholder to tell the system where the data should go. This token will be replaced at the time of creating a document by the mail merge engine.

To insert a mail merge token you need to surround the dataverse column's **logical name** (this is usually in the format of _prefix_fieldname_) with the token delimters _[_ and _]_. For example: `[prefix_fieldname]`.

## Formulas

To insert a formula simply start a formula placeholder as explained above and insert your logic. Below is the list of supported operators and some examples.

- All maths operators + - \* \*\* / %
- Comparison > < >= <= == !=
- Mail merge tokens ${[prefix_column]}
- Conditionals ${if 1 + 2 == 3 (true) (false)}

## Current Date and Time

To get the current date and time use the formula `${DateTime.Now}`. This will display the current date and time.

To format the date, i.e. to only get the date without the time component use `${DateTime.Now.ToShortDateString()}`.

For more complex formatting options you can use the _ToString_ method with parameters: `${DateTime.Now.ToString("dd-MM-yyyy")}`

## Conditionals

Conditionals start with the word **if** followed by a **condition** or **formula** that must evaluate to **true** or **false** and followed by two sets of parentheses for the true outcome and false outcome respectively. Mail merge tokens are allowed to be used in any part of the if statement and the value will be used when evaluating the condition. See the example below:

`${if [prefix_column] != null (column contains data) (column does not contain data)}`
