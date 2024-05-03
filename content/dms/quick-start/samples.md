---
title: "Samples"
date: 2024-05-03T16:00:43+01:00
collapsibleMenu: false
alwaysopen: false
---

{{% notice style="tip" %}}
You can the samples in this page to create new content for templates or use it to migrate from one version to another.
{{% /notice %}}

## Signee Templates

### Queries

```xml { title="Primary" }
<fetch>
  <entity name="crmd_dms_proposal">
    <filter type="and">
      <condition attribute="activityid" operator="eq" value="%{rowId}" />
    </filter>
  </entity>
</fetch>
```

{{% badge style="info" title="New" %}}0.8.0+{{% /badge %}}

```xml { title="Query1" }
<fetch>
  <entity name="crmd_dms_signee">
    <filter type="and">
      <condition attribute="crmd_proposalid" operator="eq" value="%{rowId}" />
    </filter>
  </entity>
</fetch>
```

### Signee table

```html
<table data-dms-source="query1">
  <tbody>
    <tr>
      <td>
        <p>
          <span>First Name: ${[crmd_firstname]}</span>
          <br />
          <span>Last Name: ${[crmd_lastname]}</span>
          <br />
          <span>Job Title: ${[crmd_jobtitle]}</span>
          <br />
          <span>Signature:</span>
        </p>
        <p>
          <img
            src='${[Convert.ToBase64SrcString(File("crmd_signatureimage"))]}' />
        </p>
        <p>
          <span>Signed On: ${[crmd_signedon]}</span>
        </p>
        <p>
          <span>IP Address: ${[crmd_ipaddress]}</span>
        </p>
      </td>
    </tr>
  </tbody>
</table>
```
