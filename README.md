<div align="left">

[![Visit Sage](./header.png)](https://sage.com)

# [Sage](https://sage.com)<a id="sage"></a>

All requests are required to be sent to your subdomain. To learn how to enable API in your Sage HR account, please visit https://support.sage.hr/en/articles/3246469-how-does-cakehr-api-work

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`sage.documents.createNewDocument`](#sagedocumentscreatenewdocument)
  * [`sage.documents.listCategories`](#sagedocumentslistcategories)
  * [`sage.employee.createNewEmployee`](#sageemployeecreatenewemployee)
  * [`sage.employee.getById`](#sageemployeegetbyid)
  * [`sage.employee.getCompensations`](#sageemployeegetcompensations)
  * [`sage.employee.getCustomFields`](#sageemployeegetcustomfields)
  * [`sage.employee.getTerminatedEmployee`](#sageemployeegetterminatedemployee)
  * [`sage.employee.getTimeOffBalances`](#sageemployeegettimeoffbalances)
  * [`sage.employee.listActiveEmployees`](#sageemployeelistactiveemployees)
  * [`sage.employee.listTerminatedEmployees`](#sageemployeelistterminatedemployees)
  * [`sage.employee.terminateEmployee`](#sageemployeeterminateemployee)
  * [`sage.employee.updateById`](#sageemployeeupdatebyid)
  * [`sage.employee.updateCustomField`](#sageemployeeupdatecustomfield)
  * [`sage.integrations.importNewStartersList`](#sageintegrationsimportnewstarterslist)
  * [`sage.integrations.sendBonusesToVikarina`](#sageintegrationssendbonusestovikarina)
  * [`sage.integrations.transferAppointmentInfo`](#sageintegrationstransferappointmentinfo)
  * [`sage.integrations.transferBankAccountInfo`](#sageintegrationstransferbankaccountinfo)
  * [`sage.integrations.transferContractInformationToVikarina`](#sageintegrationstransfercontractinformationtovikarina)
  * [`sage.integrations.transferJobPositionFromSageToVikarina`](#sageintegrationstransferjobpositionfromsagetovikarina)
  * [`sage.integrations.transferLeaveInformationToVikarina`](#sageintegrationstransferleaveinformationtovikarina)
  * [`sage.integrations.transferOrganizationalStructureFromSageToVikarina`](#sageintegrationstransferorganizationalstructurefromsagetovikarina)
  * [`sage.integrations.transferSalaryInformation`](#sageintegrationstransfersalaryinformation)
  * [`sage.integrations.transferTerminationInfoToVikarina`](#sageintegrationstransferterminationinfotovikarina)
  * [`sage.integrations.transferTimeScheduleInformation`](#sageintegrationstransfertimescheduleinformation)
  * [`sage.integrations.transferUnusedVacationDaysToVikarina`](#sageintegrationstransferunusedvacationdaystovikarina)
  * [`sage.kitDays.createKitDay`](#sagekitdayscreatekitday)
  * [`sage.kitDays.getKitDays`](#sagekitdaysgetkitdays)
  * [`sage.kitDays.processKitDay`](#sagekitdaysprocesskitday)
  * [`sage.kitDays.updateKitDaysConfiguration`](#sagekitdaysupdatekitdaysconfiguration)
  * [`sage.leaveManagement.createKitDay`](#sageleavemanagementcreatekitday)
  * [`sage.leaveManagement.getIndividualAllowances`](#sageleavemanagementgetindividualallowances)
  * [`sage.leaveManagement.getKitDays`](#sageleavemanagementgetkitdays)
  * [`sage.leaveManagement.getTimeOffBalances`](#sageleavemanagementgettimeoffbalances)
  * [`sage.leaveManagement.getTimeOffPolicyById`](#sageleavemanagementgettimeoffpolicybyid)
  * [`sage.leaveManagement.listEmployeesOutToday`](#sageleavemanagementlistemployeesouttoday)
  * [`sage.leaveManagement.listTimeOffPolicies`](#sageleavemanagementlisttimeoffpolicies)
  * [`sage.leaveManagement.listTimeOffRequests`](#sageleavemanagementlisttimeoffrequests)
  * [`sage.leaveManagement.newTimeOffRequest`](#sageleavemanagementnewtimeoffrequest)
  * [`sage.leaveManagement.processKitDay`](#sageleavemanagementprocesskitday)
  * [`sage.leaveManagement.updateKitDaysConfiguration`](#sageleavemanagementupdatekitdaysconfiguration)
  * [`sage.offboarding.createTask`](#sageoffboardingcreatetask)
  * [`sage.offboarding.listCategories`](#sageoffboardinglistcategories)
  * [`sage.onboarding.createNewTask`](#sageonboardingcreatenewtask)
  * [`sage.onboarding.listTaskCategories`](#sageonboardinglisttaskcategories)
  * [`sage.performance.getQuarterlyCompanyGoals`](#sageperformancegetquarterlycompanygoals)
  * [`sage.performance.getQuarterlyIndividualGoals`](#sageperformancegetquarterlyindividualgoals)
  * [`sage.performance.getQuarterlyTeamGoals`](#sageperformancegetquarterlyteamgoals)
  * [`sage.performance.overviewQuarterlyProgress`](#sageperformanceoverviewquarterlyprogress)
  * [`sage.policies.createKitDay`](#sagepoliciescreatekitday)
  * [`sage.policies.getKitDays`](#sagepoliciesgetkitdays)
  * [`sage.policies.processKitDay`](#sagepoliciesprocesskitday)
  * [`sage.positions.listCompanyPositions`](#sagepositionslistcompanypositions)
  * [`sage.recruitment.createApplicantWithReferral`](#sagerecruitmentcreateapplicantwithreferral)
  * [`sage.recruitment.getApplicantDetails`](#sagerecruitmentgetapplicantdetails)
  * [`sage.recruitment.getPositionDetails`](#sagerecruitmentgetpositiondetails)
  * [`sage.recruitment.listApplicantActions`](#sagerecruitmentlistapplicantactions)
  * [`sage.recruitment.listApplicants`](#sagerecruitmentlistapplicants)
  * [`sage.recruitment.listPositions`](#sagerecruitmentlistpositions)
  * [`sage.teams.listInCompany`](#sageteamslistincompany)
  * [`sage.terminationsReasons.listInCompany`](#sageterminationsreasonslistincompany)
  * [`sage.timesheets.clockInOut`](#sagetimesheetsclockinout)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Sage&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { Sage } from "sage-typescript-sdk";

const sage = new Sage({
  // Defining the base path is optional and defaults to https://subdomain.sage.hr/api
  // basePath: "https://subdomain.sage.hr/api",
  apiKey: "API_KEY",
});

const createNewDocumentResponse = await sage.documents.createNewDocument({
  file: fs.readFileSync("/path/to/file"),
  employee_id: 1,
});

console.log(createNewDocumentResponse);
```

## Reference<a id="reference"></a>


### `sage.documents.createNewDocument`<a id="sagedocumentscreatenewdocument"></a>

Document will only be visible to employee themselves

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewDocumentResponse = await sage.documents.createNewDocument({
  file: fs.readFileSync("/path/to/file"),
  employee_id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### file: `Uint8Array | File | buffer.File`<a id="file-uint8array--file--bufferfile"></a>

The file to upload.

##### employeeId: `number`<a id="employeeid-number"></a>

Employee identifier

##### description: `string`<a id="description-string"></a>

Document description

##### categoryId: `number`<a id="categoryid-number"></a>

Category identifier, leave empty for default category

##### notify: `string`<a id="notify-string"></a>

\\\'true\\\' to notify employee by email

#### 🔄 Return<a id="🔄-return"></a>

[DocumentsCreateNewDocumentResponse](./models/documents-create-new-document-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/documents` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sage.documents.listCategories`<a id="sagedocumentslistcategories"></a>

List document categories

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCategoriesResponse = await sage.documents.listCategories();
```

#### 🔄 Return<a id="🔄-return"></a>

[DocumentsListCategoriesResponse](./models/documents-list-categories-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/documents/categories` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sage.employee.createNewEmployee`<a id="sageemployeecreatenewemployee"></a>

Create new employee

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewEmployeeResponse = await sage.employee.createNewEmployee({
  email: "email_example",
  first_name: "first_name_example",
  last_name: "last_name_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### email: `string`<a id="email-string"></a>

Employees email

##### firstName: `string`<a id="firstname-string"></a>

Employees first name

##### lastName: `string`<a id="lastname-string"></a>

Employees last name

##### workStartDate: `string`<a id="workstartdate-string"></a>

Employees work start date, format: YYYY-MM-DD, leave empty to use todays date

##### sendEmail: `string`<a id="sendemail-string"></a>

\\\'true\\\' to send welcome email to employee

#### 🔄 Return<a id="🔄-return"></a>

[EmployeeCreateNewEmployeeResponse](./models/employee-create-new-employee-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employees` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sage.employee.getById`<a id="sageemployeegetbyid"></a>

Single active employee in company

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await sage.employee.getById({
  id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

Numeric ID of the user to get.

##### teamHistory: `boolean`<a id="teamhistory-boolean"></a>

##### employmentStatusHistory: `boolean`<a id="employmentstatushistory-boolean"></a>

##### positionHistory: `boolean`<a id="positionhistory-boolean"></a>

#### 🔄 Return<a id="🔄-return"></a>

[EmployeeGetByIdResponse](./models/employee-get-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employees/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sage.employee.getCompensations`<a id="sageemployeegetcompensations"></a>

Employee compensations

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCompensationsResponse = await sage.employee.getCompensations({
  id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

Numeric ID of the user to get.

#### 🔄 Return<a id="🔄-return"></a>

[EmployeeGetCompensationsResponse](./models/employee-get-compensations-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employees/{id}/compensations` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sage.employee.getCustomFields`<a id="sageemployeegetcustomfields"></a>

Employee custom fields

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCustomFieldsResponse = await sage.employee.getCustomFields({
  id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

Numeric ID of the user to get.

#### 🔄 Return<a id="🔄-return"></a>

[EmployeeGetCustomFieldsResponse](./models/employee-get-custom-fields-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employees/{id}/custom-fields` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sage.employee.getTerminatedEmployee`<a id="sageemployeegetterminatedemployee"></a>

Single terminated employee in company

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTerminatedEmployeeResponse = await sage.employee.getTerminatedEmployee(
  {
    id: 1,
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

Numeric ID of the user to get.

#### 🔄 Return<a id="🔄-return"></a>

[EmployeeGetTerminatedEmployeeResponse](./models/employee-get-terminated-employee-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/terminated-employees/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sage.employee.getTimeOffBalances`<a id="sageemployeegettimeoffbalances"></a>

Employee time off balances

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTimeOffBalancesResponse = await sage.employee.getTimeOffBalances({
  id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

Numeric ID of the user to get.

#### 🔄 Return<a id="🔄-return"></a>

[LeaveManagementGetTimeOffBalancesResponse](./models/leave-management-get-time-off-balances-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employees/{id}/leave-management/balances` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sage.employee.listActiveEmployees`<a id="sageemployeelistactiveemployees"></a>

List active employees in company

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listActiveEmployeesResponse = await sage.employee.listActiveEmployees({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### page: `number`<a id="page-number"></a>

##### teamHistory: `boolean`<a id="teamhistory-boolean"></a>

##### employmentStatusHistory: `boolean`<a id="employmentstatushistory-boolean"></a>

##### positionHistory: `boolean`<a id="positionhistory-boolean"></a>

#### 🔄 Return<a id="🔄-return"></a>

[EmployeeListActiveEmployeesResponse](./models/employee-list-active-employees-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employees` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sage.employee.listTerminatedEmployees`<a id="sageemployeelistterminatedemployees"></a>

List terminated employees in company

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listTerminatedEmployeesResponse =
  await sage.employee.listTerminatedEmployees({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### page: `number`<a id="page-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[EmployeeListTerminatedEmployeesResponse](./models/employee-list-terminated-employees-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/terminated-employees` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sage.employee.terminateEmployee`<a id="sageemployeeterminateemployee"></a>

Terminate employee

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const terminateEmployeeResponse = await sage.employee.terminateEmployee({
  id: 1,
  date: "date_example",
  termination_reason_id: 3.14,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

Numeric ID of the user

##### date: `string`<a id="date-string"></a>

Last working day; format: YYYY-MM-DD

##### terminationReasonId: `number`<a id="terminationreasonid-number"></a>

Termination reason ID

##### comments: `string`<a id="comments-string"></a>

Comments

#### 🔄 Return<a id="🔄-return"></a>

[EmployeeTerminateEmployeeResponse](./models/employee-terminate-employee-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employees/{id}/terminations` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sage.employee.updateById`<a id="sageemployeeupdatebyid"></a>

Update Employee

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateByIdResponse = await sage.employee.updateById({
  id: 1,
  first_name: "Jane",
  last_name: "Doe",
  work_start_date: "2020-01-28",
  location_id: 1,
  team_id: 2,
  leader_id: 3,
  position_id: 101,
  employee_number: "0123456",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

Numeric ID of the user to update.

##### first_name: `string`<a id="first_name-string"></a>

##### last_name: `string`<a id="last_name-string"></a>

##### work_start_date: `string`<a id="work_start_date-string"></a>

##### location_id: `number`<a id="location_id-number"></a>

##### team_id: `number`<a id="team_id-number"></a>

##### leader_id: `number`<a id="leader_id-number"></a>

##### position_id: `number`<a id="position_id-number"></a>

##### employee_number: `string`<a id="employee_number-string"></a>

##### approver_ids: `number`[]<a id="approver_ids-number"></a>

##### selected_leave_types: `number`[]<a id="selected_leave_types-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[EmployeeUpdateByIdResponse](./models/employee-update-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employees/{id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sage.employee.updateCustomField`<a id="sageemployeeupdatecustomfield"></a>

Update employee custom field

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateCustomFieldResponse = await sage.employee.updateCustomField({
  id: 1,
  customFieldId: 1,
  value: "value_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

Employee identifier

##### customFieldId: `number`<a id="customfieldid-number"></a>

Custom field identifier

##### value: `string`<a id="value-string"></a>

String or array (for tags)

#### 🔄 Return<a id="🔄-return"></a>

[EmployeeUpdateCustomFieldResponse](./models/employee-update-custom-field-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employees/{id}/custom-fields/{custom_field_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sage.integrations.importNewStartersList`<a id="sageintegrationsimportnewstarterslist"></a>

New starters list from Sage HR to Vikarina

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const importNewStartersListResponse =
  await sage.integrations.importNewStartersList({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### startDate: `string`<a id="startdate-string"></a>

##### endDate: `string`<a id="enddate-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[IntegrationsImportNewStartersListResponse](./models/integrations-import-new-starters-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/vikarina/newstarter-employees` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sage.integrations.sendBonusesToVikarina`<a id="sageintegrationssendbonusestovikarina"></a>

Sending bonuses [payed once] to Vikarina

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const sendBonusesToVikarinaResponse =
  await sage.integrations.sendBonusesToVikarina({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### startDate: `string`<a id="startdate-string"></a>

##### endDate: `string`<a id="enddate-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[IntegrationsSendBonusesToVikarinaResponse](./models/integrations-send-bonuses-to-vikarina-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/vikarina/bonuses` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sage.integrations.transferAppointmentInfo`<a id="sageintegrationstransferappointmentinfo"></a>

New appointment (position changes) information transfer from Sage HR to Vikarina

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const transferAppointmentInfoResponse =
  await sage.integrations.transferAppointmentInfo({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### startDate: `string`<a id="startdate-string"></a>

##### endDate: `string`<a id="enddate-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[IntegrationsTransferAppointmentInfoResponse](./models/integrations-transfer-appointment-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/vikarina/appointments` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sage.integrations.transferBankAccountInfo`<a id="sageintegrationstransferbankaccountinfo"></a>

Bank account information transfer (Custom field) from Sage HR to Vikarina

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const transferBankAccountInfoResponse =
  await sage.integrations.transferBankAccountInfo();
```

#### 🔄 Return<a id="🔄-return"></a>

[IntegrationsTransferBankAccountInfoResponse](./models/integrations-transfer-bank-account-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/vikarina/bank-accounts` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sage.integrations.transferContractInformationToVikarina`<a id="sageintegrationstransfercontractinformationtovikarina"></a>

Contract (custom field) information transfer from Sage HR to Vikarina

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const transferContractInformationToVikarinaResponse =
  await sage.integrations.transferContractInformationToVikarina();
```

#### 🔄 Return<a id="🔄-return"></a>

[IntegrationsTransferContractInformationToVikarinaResponse](./models/integrations-transfer-contract-information-to-vikarina-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/vikarina/contract-information` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sage.integrations.transferJobPositionFromSageToVikarina`<a id="sageintegrationstransferjobpositionfromsagetovikarina"></a>

Job position transfer from Sage HR to Vikarina

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const transferJobPositionFromSageToVikarinaResponse =
  await sage.integrations.transferJobPositionFromSageToVikarina();
```

#### 🔄 Return<a id="🔄-return"></a>

[IntegrationsTransferJobPositionFromSageToVikarinaResponse](./models/integrations-transfer-job-position-from-sage-to-vikarina-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/vikarina/job-positions` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sage.integrations.transferLeaveInformationToVikarina`<a id="sageintegrationstransferleaveinformationtovikarina"></a>

Leaves information transfer from Sage HR to Vikarina

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const transferLeaveInformationToVikarinaResponse =
  await sage.integrations.transferLeaveInformationToVikarina({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### startDate: `string`<a id="startdate-string"></a>

##### endDate: `string`<a id="enddate-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[IntegrationsTransferLeaveInformationToVikarinaResponse](./models/integrations-transfer-leave-information-to-vikarina-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/vikarina/leave-types` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sage.integrations.transferOrganizationalStructureFromSageToVikarina`<a id="sageintegrationstransferorganizationalstructurefromsagetovikarina"></a>

Organizational structure transfer from Sage HR to Vikarina

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const transferOrganizationalStructureFromSageToVikarinaResponse =
  await sage.integrations.transferOrganizationalStructureFromSageToVikarina();
```

#### 🔄 Return<a id="🔄-return"></a>

[IntegrationsTransferOrganizationalStructureFromSageToVikarinaResponse](./models/integrations-transfer-organizational-structure-from-sage-to-vikarina-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/vikarina/organization-structure` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sage.integrations.transferSalaryInformation`<a id="sageintegrationstransfersalaryinformation"></a>

Salary information transfer from Sage HR to Vikarina to Vikarina

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const transferSalaryInformationResponse =
  await sage.integrations.transferSalaryInformation({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### startDate: `string`<a id="startdate-string"></a>

##### endDate: `string`<a id="enddate-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[IntegrationsTransferSalaryInformationResponse](./models/integrations-transfer-salary-information-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/vikarina/salaries` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sage.integrations.transferTerminationInfoToVikarina`<a id="sageintegrationstransferterminationinfotovikarina"></a>

Termination information transfer from Sage HR to Vikarina

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const transferTerminationInfoToVikarinaResponse =
  await sage.integrations.transferTerminationInfoToVikarina({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### startDate: `string`<a id="startdate-string"></a>

##### endDate: `string`<a id="enddate-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[IntegrationsTransferTerminationInfoToVikarinaResponse](./models/integrations-transfer-termination-info-to-vikarina-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/vikarina/terminated-employees` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sage.integrations.transferTimeScheduleInformation`<a id="sageintegrationstransfertimescheduleinformation"></a>

Time Schedule information transfer from Sage HR to Vikarina

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const transferTimeScheduleInformationResponse =
  await sage.integrations.transferTimeScheduleInformation({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### startDate: `string`<a id="startdate-string"></a>

##### endDate: `string`<a id="enddate-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[IntegrationsTransferTimeScheduleInformationResponse](./models/integrations-transfer-time-schedule-information-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/vikarina/timesheets` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sage.integrations.transferUnusedVacationDaysToVikarina`<a id="sageintegrationstransferunusedvacationdaystovikarina"></a>

Unused vacation days transfer from Sage HR to Vikarina

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const transferUnusedVacationDaysToVikarinaResponse =
  await sage.integrations.transferUnusedVacationDaysToVikarina();
```

#### 🔄 Return<a id="🔄-return"></a>

[IntegrationsTransferUnusedVacationDaysToVikarinaResponse](./models/integrations-transfer-unused-vacation-days-to-vikarina-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/vikarina/unused-days` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sage.kitDays.createKitDay`<a id="sagekitdayscreatekitday"></a>

Create a KIT day in a leave

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createKitDayResponse = await sage.kitDays.createKitDay({
  policy_id: 1,
  employee_id: 1,
  date: "2020-01-01",
  date_from: "2020-01-01",
  date_to: "2020-01-01",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### policyId: `number`<a id="policyid-number"></a>

Time-off policy identifier

##### employeeId: `number`<a id="employeeid-number"></a>

Employee identifier

##### date: `string`<a id="date-string"></a>

Date of single-day KIT day

##### dateFrom: `string`<a id="datefrom-string"></a>

Start date of a multi-day KIT day

##### dateTo: `string`<a id="dateto-string"></a>

End date of a multi-day KIT day

#### 🔄 Return<a id="🔄-return"></a>

[LeaveManagementCreateKitDayResponse](./models/leave-management-create-kit-day-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/leave-management/kit-days` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sage.kitDays.getKitDays`<a id="sagekitdaysgetkitdays"></a>

View all the KIT days of an employee in a policy

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getKitDaysResponse = await sage.kitDays.getKitDays({
  policyId: 1,
  employeeId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### policyId: `number`<a id="policyid-number"></a>

Time-off policy identifier

##### employeeId: `number`<a id="employeeid-number"></a>

Employee identifier

#### 🔄 Return<a id="🔄-return"></a>

[LeaveManagementGetKitDaysResponse](./models/leave-management-get-kit-days-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/leave-management/kit-days` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sage.kitDays.processKitDay`<a id="sagekitdaysprocesskitday"></a>

Approve, decline or cancel a KIT day

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const processKitDayResponse = await sage.kitDays.processKitDay({
  id: 1,
  status: "cancel",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

KIT day identifier

##### status: `string`<a id="status-string"></a>

Action to apply to the specified KIT day

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/leave-management/kit-days/{id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sage.kitDays.updateKitDaysConfiguration`<a id="sagekitdaysupdatekitdaysconfiguration"></a>

Update KIT days configuration of a time off policy

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateKitDaysConfigurationResponse =
  await sage.kitDays.updateKitDaysConfiguration({
    id: 1,
    kit_days_enabled: true,
    kit_days_quantity: 5,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

Numeric ID of the policy to get.

##### kitDaysEnabled: `boolean`<a id="kitdaysenabled-boolean"></a>

Whether the policy allows Kit days or not

##### kitDaysQuantity: `number`<a id="kitdaysquantity-number"></a>

Maximum number of Kit days allowed in the policy

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/leave-management/policies/{id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sage.leaveManagement.createKitDay`<a id="sageleavemanagementcreatekitday"></a>

Create a KIT day in a leave

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createKitDayResponse = await sage.leaveManagement.createKitDay({
  policy_id: 1,
  employee_id: 1,
  date: "2020-01-01",
  date_from: "2020-01-01",
  date_to: "2020-01-01",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### policyId: `number`<a id="policyid-number"></a>

Time-off policy identifier

##### employeeId: `number`<a id="employeeid-number"></a>

Employee identifier

##### date: `string`<a id="date-string"></a>

Date of single-day KIT day

##### dateFrom: `string`<a id="datefrom-string"></a>

Start date of a multi-day KIT day

##### dateTo: `string`<a id="dateto-string"></a>

End date of a multi-day KIT day

#### 🔄 Return<a id="🔄-return"></a>

[LeaveManagementCreateKitDayResponse](./models/leave-management-create-kit-day-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/leave-management/kit-days` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sage.leaveManagement.getIndividualAllowances`<a id="sageleavemanagementgetindividualallowances"></a>

Report with individual allowances

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getIndividualAllowancesResponse =
  await sage.leaveManagement.getIndividualAllowances({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### page: `number`<a id="page-number"></a>

##### perPage: `number`<a id="perpage-number"></a>

##### locationIds: `number`[]<a id="locationids-number"></a>

Limit the reports to employees in specified location ids

##### employeeIds: `number`[]<a id="employeeids-number"></a>

Limit the reports to selected employee ids

##### teamIds: `number`[]<a id="teamids-number"></a>

Limit the reports to employees in specified team ids

#### 🔄 Return<a id="🔄-return"></a>

[LeaveManagementGetIndividualAllowancesResponse](./models/leave-management-get-individual-allowances-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/leave-management/reports/individual-allowances` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sage.leaveManagement.getKitDays`<a id="sageleavemanagementgetkitdays"></a>

View all the KIT days of an employee in a policy

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getKitDaysResponse = await sage.leaveManagement.getKitDays({
  policyId: 1,
  employeeId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### policyId: `number`<a id="policyid-number"></a>

Time-off policy identifier

##### employeeId: `number`<a id="employeeid-number"></a>

Employee identifier

#### 🔄 Return<a id="🔄-return"></a>

[LeaveManagementGetKitDaysResponse](./models/leave-management-get-kit-days-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/leave-management/kit-days` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sage.leaveManagement.getTimeOffBalances`<a id="sageleavemanagementgettimeoffbalances"></a>

Employee time off balances

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTimeOffBalancesResponse =
  await sage.leaveManagement.getTimeOffBalances({
    id: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

Numeric ID of the user to get.

#### 🔄 Return<a id="🔄-return"></a>

[LeaveManagementGetTimeOffBalancesResponse](./models/leave-management-get-time-off-balances-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employees/{id}/leave-management/balances` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sage.leaveManagement.getTimeOffPolicyById`<a id="sageleavemanagementgettimeoffpolicybyid"></a>

Details about a time off policy

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTimeOffPolicyByIdResponse =
  await sage.leaveManagement.getTimeOffPolicyById({
    id: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

Numeric ID of the policy to get.

#### 🔄 Return<a id="🔄-return"></a>

[LeaveManagementGetTimeOffPolicyByIdResponse](./models/leave-management-get-time-off-policy-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/leave-management/policies/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sage.leaveManagement.listEmployeesOutToday`<a id="sageleavemanagementlistemployeesouttoday"></a>

List employees out of office today

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listEmployeesOutTodayResponse =
  await sage.leaveManagement.listEmployeesOutToday({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### date: `string`<a id="date-string"></a>

Optional date, defauls to today

#### 🔄 Return<a id="🔄-return"></a>

[LeaveManagementListEmployeesOutTodayResponse](./models/leave-management-list-employees-out-today-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/leave-management/out-of-office-today` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sage.leaveManagement.listTimeOffPolicies`<a id="sageleavemanagementlisttimeoffpolicies"></a>

List time off policies

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listTimeOffPoliciesResponse =
  await sage.leaveManagement.listTimeOffPolicies();
```

#### 🔄 Return<a id="🔄-return"></a>

[LeaveManagementListTimeOffPoliciesResponse](./models/leave-management-list-time-off-policies-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/leave-management/policies` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sage.leaveManagement.listTimeOffRequests`<a id="sageleavemanagementlisttimeoffrequests"></a>

List time off requests

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listTimeOffRequestsResponse =
  await sage.leaveManagement.listTimeOffRequests({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### page: `number`<a id="page-number"></a>

##### from: `string`<a id="from-string"></a>

If not specified defaults to beginning of current month

##### to: `string`<a id="to-string"></a>

If not specified defaults to end of current month. Days between from date and to date must be less than 65. If you need info for larger period of time make multiple requests;

#### 🔄 Return<a id="🔄-return"></a>

[LeaveManagementListTimeOffRequestsResponse](./models/leave-management-list-time-off-requests-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/leave-management/requests` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sage.leaveManagement.newTimeOffRequest`<a id="sageleavemanagementnewtimeoffrequest"></a>

Create new time off request

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const newTimeOffRequestResponse = await sage.leaveManagement.newTimeOffRequest({
  type: "single",
  time_off_policy_id: 1,
  employee_id: 1,
  part_of_day: "all_day",
  time_from: "07:30",
  time_to: "900",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### type: `string`<a id="type-string"></a>

##### timeOffPolicyId: `number`<a id="timeoffpolicyid-number"></a>

##### employeeId: `number`<a id="employeeid-number"></a>

##### partOfDay: `string`<a id="partofday-string"></a>

required if type is single

##### date: `string`<a id="date-string"></a>

format: YYYY-MM-DD; required if type is single

##### dateFrom: `string`<a id="datefrom-string"></a>

format: YYYY-MM-DD; required if type is multi

##### dateTo: `string`<a id="dateto-string"></a>

format: YYYY-MM-DD; required if type is multi

##### hours: `number`<a id="hours-number"></a>

required if type is single & part_of_day is first_part_of_day or second_part_of_day

##### timeFrom: `string`<a id="timefrom-string"></a>

format: H:M; required if part_of_day is specific_timespan

##### timeTo: `string`<a id="timeto-string"></a>

format: H:M; required if part_of_day is specific_timespan

##### details: `string`<a id="details-string"></a>

required based on policy settings

#### 🔄 Return<a id="🔄-return"></a>

[LeaveManagementNewTimeOffRequestResponse](./models/leave-management-new-time-off-request-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/leave-management/requests` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sage.leaveManagement.processKitDay`<a id="sageleavemanagementprocesskitday"></a>

Approve, decline or cancel a KIT day

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const processKitDayResponse = await sage.leaveManagement.processKitDay({
  id: 1,
  status: "cancel",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

KIT day identifier

##### status: `string`<a id="status-string"></a>

Action to apply to the specified KIT day

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/leave-management/kit-days/{id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sage.leaveManagement.updateKitDaysConfiguration`<a id="sageleavemanagementupdatekitdaysconfiguration"></a>

Update KIT days configuration of a time off policy

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateKitDaysConfigurationResponse =
  await sage.leaveManagement.updateKitDaysConfiguration({
    id: 1,
    kit_days_enabled: true,
    kit_days_quantity: 5,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

Numeric ID of the policy to get.

##### kitDaysEnabled: `boolean`<a id="kitdaysenabled-boolean"></a>

Whether the policy allows Kit days or not

##### kitDaysQuantity: `number`<a id="kitdaysquantity-number"></a>

Maximum number of Kit days allowed in the policy

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/leave-management/policies/{id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sage.offboarding.createTask`<a id="sageoffboardingcreatetask"></a>

Create new offboarding task

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createTaskResponse = await sage.offboarding.createTask({
  title: "title_example",
  boarding_task_template_category_id: 3.14,
  due_in: 30,
  default_assignee_type: "self",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### title: `string`<a id="title-string"></a>

##### boardingTaskTemplateCategoryId: `number`<a id="boardingtasktemplatecategoryid-number"></a>

##### dueIn: `number`<a id="duein-number"></a>

Due date in days before employee last working day

##### description: `string`<a id="description-string"></a>

##### defaultAssigneeType: `string`<a id="defaultassigneetype-string"></a>

Default: self; leader - direct manager; employee - specific employee via assignee_id

##### assigneeId: `number`<a id="assigneeid-number"></a>

Specific assignee if default_assignee_type is \\\'employee\\\'

##### requireAttachment: `string`<a id="requireattachment-string"></a>

\\\'true\\\' to enabled required attachment

#### 🔄 Return<a id="🔄-return"></a>

[OffboardingCreateTaskResponse](./models/offboarding-create-task-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/offboarding/tasks` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sage.offboarding.listCategories`<a id="sageoffboardinglistcategories"></a>

List offboarding task categories

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCategoriesResponse = await sage.offboarding.listCategories();
```

#### 🔄 Return<a id="🔄-return"></a>

[OffboardingListCategoriesResponse](./models/offboarding-list-categories-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/offboarding/categories` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sage.onboarding.createNewTask`<a id="sageonboardingcreatenewtask"></a>

Create new onboarding task

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewTaskResponse = await sage.onboarding.createNewTask({
  title: "title_example",
  boarding_task_template_category_id: 3.14,
  due_in: 30,
  default_assignee_type: "self",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### title: `string`<a id="title-string"></a>

##### boardingTaskTemplateCategoryId: `number`<a id="boardingtasktemplatecategoryid-number"></a>

##### dueIn: `number`<a id="duein-number"></a>

Due date in days after employee start date

##### description: `string`<a id="description-string"></a>

##### defaultAssigneeType: `string`<a id="defaultassigneetype-string"></a>

Default: self; leader - direct manager; employee - specific employee via assignee_id

##### assigneeId: `number`<a id="assigneeid-number"></a>

Specific assignee if default_assignee_type is \\\'employee\\\'

##### requireAttachment: `string`<a id="requireattachment-string"></a>

\\\'true\\\' to enabled required attachment

##### addAfter: `number`<a id="addafter-number"></a>

Task start date in days after employee start date

#### 🔄 Return<a id="🔄-return"></a>

[OnboardingCreateNewTaskResponse](./models/onboarding-create-new-task-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/onboarding/tasks` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sage.onboarding.listTaskCategories`<a id="sageonboardinglisttaskcategories"></a>

List onboarding task categories

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listTaskCategoriesResponse = await sage.onboarding.listTaskCategories();
```

#### 🔄 Return<a id="🔄-return"></a>

[OnboardingListTaskCategoriesResponse](./models/onboarding-list-task-categories-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/onboarding/categories` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sage.performance.getQuarterlyCompanyGoals`<a id="sageperformancegetquarterlycompanygoals"></a>

Quarterly company goals

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getQuarterlyCompanyGoalsResponse =
  await sage.performance.getQuarterlyCompanyGoals();
```

#### 🔄 Return<a id="🔄-return"></a>

[PerformanceGetQuarterlyCompanyGoalsResponse](./models/performance-get-quarterly-company-goals-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/performance/goals/quarterly-progress/company-goals` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sage.performance.getQuarterlyIndividualGoals`<a id="sageperformancegetquarterlyindividualgoals"></a>

Quarterly individual goals

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getQuarterlyIndividualGoalsResponse =
  await sage.performance.getQuarterlyIndividualGoals();
```

#### 🔄 Return<a id="🔄-return"></a>

[PerformanceGetQuarterlyIndividualGoalsResponse](./models/performance-get-quarterly-individual-goals-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/performance/goals/quarterly-progress/individual-goals` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sage.performance.getQuarterlyTeamGoals`<a id="sageperformancegetquarterlyteamgoals"></a>

Quarterly team goals

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getQuarterlyTeamGoalsResponse =
  await sage.performance.getQuarterlyTeamGoals();
```

#### 🔄 Return<a id="🔄-return"></a>

[PerformanceGetQuarterlyTeamGoalsResponse](./models/performance-get-quarterly-team-goals-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/performance/goals/quarterly-progress/team-goals` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sage.performance.overviewQuarterlyProgress`<a id="sageperformanceoverviewquarterlyprogress"></a>

Overview of quarterly goal progress

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const overviewQuarterlyProgressResponse =
  await sage.performance.overviewQuarterlyProgress();
```

#### 🔄 Return<a id="🔄-return"></a>

[PerformanceOverviewQuarterlyProgressResponse](./models/performance-overview-quarterly-progress-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/performance/goals/quarterly-progress/overall` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sage.policies.createKitDay`<a id="sagepoliciescreatekitday"></a>

Create a KIT day in a leave

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createKitDayResponse = await sage.policies.createKitDay({
  policy_id: 1,
  employee_id: 1,
  date: "2020-01-01",
  date_from: "2020-01-01",
  date_to: "2020-01-01",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### policyId: `number`<a id="policyid-number"></a>

Time-off policy identifier

##### employeeId: `number`<a id="employeeid-number"></a>

Employee identifier

##### date: `string`<a id="date-string"></a>

Date of single-day KIT day

##### dateFrom: `string`<a id="datefrom-string"></a>

Start date of a multi-day KIT day

##### dateTo: `string`<a id="dateto-string"></a>

End date of a multi-day KIT day

#### 🔄 Return<a id="🔄-return"></a>

[LeaveManagementCreateKitDayResponse](./models/leave-management-create-kit-day-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/leave-management/kit-days` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sage.policies.getKitDays`<a id="sagepoliciesgetkitdays"></a>

View all the KIT days of an employee in a policy

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getKitDaysResponse = await sage.policies.getKitDays({
  policyId: 1,
  employeeId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### policyId: `number`<a id="policyid-number"></a>

Time-off policy identifier

##### employeeId: `number`<a id="employeeid-number"></a>

Employee identifier

#### 🔄 Return<a id="🔄-return"></a>

[LeaveManagementGetKitDaysResponse](./models/leave-management-get-kit-days-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/leave-management/kit-days` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sage.policies.processKitDay`<a id="sagepoliciesprocesskitday"></a>

Approve, decline or cancel a KIT day

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const processKitDayResponse = await sage.policies.processKitDay({
  id: 1,
  status: "cancel",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

KIT day identifier

##### status: `string`<a id="status-string"></a>

Action to apply to the specified KIT day

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/leave-management/kit-days/{id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sage.positions.listCompanyPositions`<a id="sagepositionslistcompanypositions"></a>

List positions in company

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCompanyPositionsResponse = await sage.positions.listCompanyPositions(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### page: `number`<a id="page-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PositionsListCompanyPositionsResponse](./models/positions-list-company-positions-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/positions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sage.recruitment.createApplicantWithReferral`<a id="sagerecruitmentcreateapplicantwithreferral"></a>

Tracking applicant's source:
 * if left blank, source will be automatically set to `api`
 * set source to a special keyword (`company_marketing`, `recruiters`, `referral`, `sourced`) to have it mapped to corresponding values 
 * set source to a desired reference to create a custom source, e.g. `source=linkedin` will create a custom source called linkedin if it does not exist already
 * passing a referral object as a parameter will set the source to `referral`

 
Example of creating an applicant with a refferal object:
```
curl -X POST -H 'X-AUTH-TOKEN:***' -H 'Content-Type:application/json' \
  "https://***/api/recruitment/positions/2/applicants" \
  -d '{"applicant": \
          {"referral": {"email": "recruitment@example.com", "full_name": "Alice L"}, \
           "address": "BD23 8UL", "summary":"An applicant", \
           "first_name": "Applicant Name"}}'
```


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createApplicantWithReferralResponse =
  await sage.recruitment.createApplicantWithReferral({
    id: 1,
    applicant_first_name: "applicant_first_name_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

Numeric ID of position (must not be closed or completed).

##### applicantFirstName: `string`<a id="applicantfirstname-string"></a>

##### sendThankYouEmail: `string`<a id="sendthankyouemail-string"></a>

\\\'true\\\' to send thank you email to applicant

##### applicantLastName: `string`<a id="applicantlastname-string"></a>

##### applicantEmail: `string`<a id="applicantemail-string"></a>

##### applicantReferral: `string`<a id="applicantreferral-string"></a>

##### applicantPhoneNumber: `string`<a id="applicantphonenumber-string"></a>

##### applicantSource: `string`<a id="applicantsource-string"></a>

##### applicantAddress: `string`<a id="applicantaddress-string"></a>

##### applicantSummary: `string`<a id="applicantsummary-string"></a>

##### applicantAttachment: `Uint8Array | File | buffer.File`<a id="applicantattachment-uint8array--file--bufferfile"></a>

The file to upload.

#### 🔄 Return<a id="🔄-return"></a>

[RecruitmentCreateApplicantWithReferralResponse](./models/recruitment-create-applicant-with-referral-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/recruitment/positions/{id}/applicants` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sage.recruitment.getApplicantDetails`<a id="sagerecruitmentgetapplicantdetails"></a>

Applicant details

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getApplicantDetailsResponse = await sage.recruitment.getApplicantDetails({
  id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

Numeric ID of applicant

#### 🔄 Return<a id="🔄-return"></a>

[RecruitmentGetApplicantDetailsResponse](./models/recruitment-get-applicant-details-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/recruitment/applicants/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sage.recruitment.getPositionDetails`<a id="sagerecruitmentgetpositiondetails"></a>

Position details

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPositionDetailsResponse = await sage.recruitment.getPositionDetails({
  id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

Numeric ID of position

#### 🔄 Return<a id="🔄-return"></a>

[RecruitmentGetPositionDetailsResponse](./models/recruitment-get-position-details-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/recruitment/positions/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sage.recruitment.listApplicantActions`<a id="sagerecruitmentlistapplicantactions"></a>

List applicant's process throught the recruitment pipeline. Newest, first.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listApplicantActionsResponse =
  await sage.recruitment.listApplicantActions({
    id: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

Numeric ID of applicant

##### page: `number`<a id="page-number"></a>

Pagination: fetch page at given offset

##### perPage: `number`<a id="perpage-number"></a>

Pagination: amount of actions to return in 1 call, default: 30, max: 100 

#### 🔄 Return<a id="🔄-return"></a>

[RecruitmentListApplicantActionsResponse](./models/recruitment-list-applicant-actions-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/recruitment/applicants/{id}/actions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sage.recruitment.listApplicants`<a id="sagerecruitmentlistapplicants"></a>

List applicants

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listApplicantsResponse = await sage.recruitment.listApplicants({
  id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

Numeric ID of position

##### stageId: `number`<a id="stageid-number"></a>

Optional filter by stage e.g. `?stage_id=25`

##### page: `number`<a id="page-number"></a>

Pagination: fetch page at given offset, default 1

##### perPage: `number`<a id="perpage-number"></a>

Pagination: amount of applicants to return in 1 call, default: 30, max: 100 

#### 🔄 Return<a id="🔄-return"></a>

[RecruitmentListApplicantsResponse](./models/recruitment-list-applicants-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/recruitment/positions/{id}/applicants` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sage.recruitment.listPositions`<a id="sagerecruitmentlistpositions"></a>

Posible recruitment position statuses: `draft`, `published`, `internal`, `completed`, `cancelled`


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listPositionsResponse = await sage.recruitment.listPositions({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### status: `string`<a id="status-string"></a>

Filter by status, see list of possible statuses `?status=open` 

##### hiringManagerIds: `string`[]<a id="hiringmanagerids-string"></a>

Filter by hiring manager id, can appear multiple times `hiring_manager_ids[]=251&hiring_manager_ids[]=121` 

##### groupIds: `string`[]<a id="groupids-string"></a>

Filter by group id, can appear multiple times `group_ids[]=27&group_ids[]=761` 

##### locationIds: `string`[]<a id="locationids-string"></a>

Filter by location id, can appear multiple times `location_ids[]=1&location_ids[]=12` 

##### page: `number`<a id="page-number"></a>

Pagination: fetch page at given offset

##### perPage: `number`<a id="perpage-number"></a>

Pagination: amount of positions to return in 1 call, default: 30, max: 100 

#### 🔄 Return<a id="🔄-return"></a>

[RecruitmentListPositionsResponse](./models/recruitment-list-positions-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/recruitment/positions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sage.teams.listInCompany`<a id="sageteamslistincompany"></a>

List teams in company

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listInCompanyResponse = await sage.teams.listInCompany({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### page: `number`<a id="page-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[TeamsListInCompanyResponse](./models/teams-list-in-company-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sage.terminationsReasons.listInCompany`<a id="sageterminationsreasonslistincompany"></a>

List termination reasons in company

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listInCompanyResponse = await sage.terminationsReasons.listInCompany({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### page: `number`<a id="page-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[TerminationsReasonsListInCompanyResponse](./models/terminations-reasons-list-in-company-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/termination-reasons` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `sage.timesheets.clockInOut`<a id="sagetimesheetsclockinout"></a>

Employees will be only clocked in & out if API time clocking is enabled for Timesheet group

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const clockInOutResponse = await sage.timesheets.clockInOut({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### override: `string`<a id="override-string"></a>

\\\'true\\\' if override provided days clocked entries

##### clocked_time: [`TimesheetsClockInOutRequestClockedTime`](./models/timesheets-clock-in-out-request-clocked-time.ts)<a id="clocked_time-timesheetsclockinoutrequestclockedtimemodelstimesheets-clock-in-out-request-clocked-timets"></a>

#### 🔄 Return<a id="🔄-return"></a>

[TimesheetsClockInOutResponse](./models/timesheets-clock-in-out-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/timesheets/clock-in` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
