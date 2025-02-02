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
 * @interface LeaveManagementNewTimeOffRequestRequest
 */
export interface LeaveManagementNewTimeOffRequestRequest {
    /**
     * 
     * @type {string}
     * @memberof LeaveManagementNewTimeOffRequestRequest
     */
    'type': LeaveManagementNewTimeOffRequestRequestTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof LeaveManagementNewTimeOffRequestRequest
     */
    'time_off_policy_id': number;
    /**
     * 
     * @type {number}
     * @memberof LeaveManagementNewTimeOffRequestRequest
     */
    'employee_id': number;
    /**
     * format: YYYY-MM-DD; required if type is single
     * @type {string}
     * @memberof LeaveManagementNewTimeOffRequestRequest
     */
    'date'?: string;
    /**
     * format: YYYY-MM-DD; required if type is multi
     * @type {string}
     * @memberof LeaveManagementNewTimeOffRequestRequest
     */
    'date_from'?: string;
    /**
     * format: YYYY-MM-DD; required if type is multi
     * @type {string}
     * @memberof LeaveManagementNewTimeOffRequestRequest
     */
    'date_to'?: string;
    /**
     * required if type is single
     * @type {string}
     * @memberof LeaveManagementNewTimeOffRequestRequest
     */
    'part_of_day': LeaveManagementNewTimeOffRequestRequestPartOfDayEnum;
    /**
     * required if type is single & part_of_day is first_part_of_day or second_part_of_day
     * @type {number}
     * @memberof LeaveManagementNewTimeOffRequestRequest
     */
    'hours'?: number;
    /**
     * format: H:M; required if part_of_day is specific_timespan
     * @type {string}
     * @memberof LeaveManagementNewTimeOffRequestRequest
     */
    'time_from'?: string;
    /**
     * format: H:M; required if part_of_day is specific_timespan
     * @type {string}
     * @memberof LeaveManagementNewTimeOffRequestRequest
     */
    'time_to'?: string;
    /**
     * required based on policy settings
     * @type {string}
     * @memberof LeaveManagementNewTimeOffRequestRequest
     */
    'details'?: string;
}

type LeaveManagementNewTimeOffRequestRequestTypeEnum = 'single' | 'multi'
type LeaveManagementNewTimeOffRequestRequestPartOfDayEnum = 'all_day' | 'first_part_of_day' | 'second_part_of_day' | 'specific_timespan'


