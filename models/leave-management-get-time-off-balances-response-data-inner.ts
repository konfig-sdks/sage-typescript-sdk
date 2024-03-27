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
 * @interface LeaveManagementGetTimeOffBalancesResponseDataInner
 */
export interface LeaveManagementGetTimeOffBalancesResponseDataInner {
    /**
     * 
     * @type {number}
     * @memberof LeaveManagementGetTimeOffBalancesResponseDataInner
     */
    'policy_id'?: number;
    /**
     * 
     * @type {number}
     * @memberof LeaveManagementGetTimeOffBalancesResponseDataInner
     */
    'used'?: number;
    /**
     * 
     * @type {number}
     * @memberof LeaveManagementGetTimeOffBalancesResponseDataInner
     */
    'available'?: number | null;
}

