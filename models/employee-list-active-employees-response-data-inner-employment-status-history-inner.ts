/*
Sage HR API

All requests are required to be sent to your subdomain. To learn how to enable API in your Sage HR account, please visit https://support.sage.hr/en/articles/3246469-how-does-cakehr-api-work

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface EmployeeListActiveEmployeesResponseDataInnerEmploymentStatusHistoryInner
 */
export interface EmployeeListActiveEmployeesResponseDataInnerEmploymentStatusHistoryInner {
    /**
     * 
     * @type {number}
     * @memberof EmployeeListActiveEmployeesResponseDataInnerEmploymentStatusHistoryInner
     */
    'employment_status_id'?: number;
    /**
     * 
     * @type {string}
     * @memberof EmployeeListActiveEmployeesResponseDataInnerEmploymentStatusHistoryInner
     */
    'start_date'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeeListActiveEmployeesResponseDataInnerEmploymentStatusHistoryInner
     */
    'end_date'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeeListActiveEmployeesResponseDataInnerEmploymentStatusHistoryInner
     */
    'employment_statu_name'?: string;
}

