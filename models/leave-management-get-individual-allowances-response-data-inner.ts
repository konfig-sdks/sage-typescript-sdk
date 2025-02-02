/*
Sage HR API

All requests are required to be sent to your subdomain. To learn how to enable API in your Sage HR account, please visit https://support.sage.hr/en/articles/3246469-how-does-cakehr-api-work

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { LeaveManagementGetIndividualAllowancesResponseDataInnerEligibilitiesInner } from './leave-management-get-individual-allowances-response-data-inner-eligibilities-inner';

/**
 * 
 * @export
 * @interface LeaveManagementGetIndividualAllowancesResponseDataInner
 */
export interface LeaveManagementGetIndividualAllowancesResponseDataInner {
    /**
     * 
     * @type {string}
     * @memberof LeaveManagementGetIndividualAllowancesResponseDataInner
     */
    'full_name'?: string;
    /**
     * 
     * @type {number}
     * @memberof LeaveManagementGetIndividualAllowancesResponseDataInner
     */
    'id'?: number;
    /**
     * 
     * @type {Array<LeaveManagementGetIndividualAllowancesResponseDataInnerEligibilitiesInner>}
     * @memberof LeaveManagementGetIndividualAllowancesResponseDataInner
     */
    'eligibilities'?: Array<LeaveManagementGetIndividualAllowancesResponseDataInnerEligibilitiesInner>;
}

