/*
Sage HR API

All requests are required to be sent to your subdomain. To learn how to enable API in your Sage HR account, please visit https://support.sage.hr/en/articles/3246469-how-does-cakehr-api-work

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { EmployeeListActiveEmployeesResponseDataInnerEmploymentStatusHistoryInner } from './employee-list-active-employees-response-data-inner-employment-status-history-inner';
import { EmployeeListActiveEmployeesResponseDataInnerPositionHistoryInner } from './employee-list-active-employees-response-data-inner-position-history-inner';
import { EmployeeListActiveEmployeesResponseDataInnerTeamHistoryInner } from './employee-list-active-employees-response-data-inner-team-history-inner';

/**
 * 
 * @export
 * @interface EmployeeListActiveEmployeesResponseDataInner
 */
export interface EmployeeListActiveEmployeesResponseDataInner {
    /**
     * 
     * @type {number}
     * @memberof EmployeeListActiveEmployeesResponseDataInner
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof EmployeeListActiveEmployeesResponseDataInner
     */
    'email'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeeListActiveEmployeesResponseDataInner
     */
    'first_name'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeeListActiveEmployeesResponseDataInner
     */
    'last_name'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeeListActiveEmployeesResponseDataInner
     */
    'picture_url'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeeListActiveEmployeesResponseDataInner
     */
    'employment_start_date'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeeListActiveEmployeesResponseDataInner
     */
    'date_of_birth'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeeListActiveEmployeesResponseDataInner
     */
    'team'?: string;
    /**
     * 
     * @type {number}
     * @memberof EmployeeListActiveEmployeesResponseDataInner
     */
    'team_id'?: number;
    /**
     * 
     * @type {string}
     * @memberof EmployeeListActiveEmployeesResponseDataInner
     */
    'position'?: string;
    /**
     * 
     * @type {number}
     * @memberof EmployeeListActiveEmployeesResponseDataInner
     */
    'position_id'?: number;
    /**
     * 
     * @type {number}
     * @memberof EmployeeListActiveEmployeesResponseDataInner
     */
    'reports_to_employee_id'?: number;
    /**
     * 
     * @type {string}
     * @memberof EmployeeListActiveEmployeesResponseDataInner
     */
    'work_phone'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeeListActiveEmployeesResponseDataInner
     */
    'home_phone'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeeListActiveEmployeesResponseDataInner
     */
    'mobile_phone'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeeListActiveEmployeesResponseDataInner
     */
    'gender'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeeListActiveEmployeesResponseDataInner
     */
    'street_first'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeeListActiveEmployeesResponseDataInner
     */
    'street_second'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeeListActiveEmployeesResponseDataInner
     */
    'city'?: string;
    /**
     * 
     * @type {number}
     * @memberof EmployeeListActiveEmployeesResponseDataInner
     */
    'post_code'?: number;
    /**
     * 
     * @type {string}
     * @memberof EmployeeListActiveEmployeesResponseDataInner
     */
    'country'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeeListActiveEmployeesResponseDataInner
     */
    'employee_number'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeeListActiveEmployeesResponseDataInner
     */
    'employment_status'?: string;
    /**
     * 
     * @type {Array<EmployeeListActiveEmployeesResponseDataInnerTeamHistoryInner>}
     * @memberof EmployeeListActiveEmployeesResponseDataInner
     */
    'team_history'?: Array<EmployeeListActiveEmployeesResponseDataInnerTeamHistoryInner>;
    /**
     * 
     * @type {Array<EmployeeListActiveEmployeesResponseDataInnerEmploymentStatusHistoryInner>}
     * @memberof EmployeeListActiveEmployeesResponseDataInner
     */
    'employment_status_history'?: Array<EmployeeListActiveEmployeesResponseDataInnerEmploymentStatusHistoryInner>;
    /**
     * 
     * @type {Array<EmployeeListActiveEmployeesResponseDataInnerPositionHistoryInner>}
     * @memberof EmployeeListActiveEmployeesResponseDataInner
     */
    'position_history'?: Array<EmployeeListActiveEmployeesResponseDataInnerPositionHistoryInner>;
}

