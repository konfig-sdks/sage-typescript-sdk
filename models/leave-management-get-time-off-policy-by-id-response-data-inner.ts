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
 * @interface LeaveManagementGetTimeOffPolicyByIdResponseDataInner
 */
export interface LeaveManagementGetTimeOffPolicyByIdResponseDataInner {
    /**
     * 
     * @type {number}
     * @memberof LeaveManagementGetTimeOffPolicyByIdResponseDataInner
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof LeaveManagementGetTimeOffPolicyByIdResponseDataInner
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof LeaveManagementGetTimeOffPolicyByIdResponseDataInner
     */
    'color'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof LeaveManagementGetTimeOffPolicyByIdResponseDataInner
     */
    'do_not_accrue'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof LeaveManagementGetTimeOffPolicyByIdResponseDataInner
     */
    'unit'?: string;
    /**
     * 
     * @type {string}
     * @memberof LeaveManagementGetTimeOffPolicyByIdResponseDataInner
     */
    'default_allowance'?: string;
    /**
     * 
     * @type {string}
     * @memberof LeaveManagementGetTimeOffPolicyByIdResponseDataInner
     */
    'max_carryover'?: string;
    /**
     * 
     * @type {string}
     * @memberof LeaveManagementGetTimeOffPolicyByIdResponseDataInner
     */
    'accrue_type'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof LeaveManagementGetTimeOffPolicyByIdResponseDataInner
     */
    'enable_employee_access'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LeaveManagementGetTimeOffPolicyByIdResponseDataInner
     */
    'only_full_days'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LeaveManagementGetTimeOffPolicyByIdResponseDataInner
     */
    'enable_probation_period'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LeaveManagementGetTimeOffPolicyByIdResponseDataInner
     */
    'dont_allow_negative_amount'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LeaveManagementGetTimeOffPolicyByIdResponseDataInner
     */
    'requests_in_advance_required'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LeaveManagementGetTimeOffPolicyByIdResponseDataInner
     */
    'enable_minimum_days'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LeaveManagementGetTimeOffPolicyByIdResponseDataInner
     */
    'enable_limited_days'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LeaveManagementGetTimeOffPolicyByIdResponseDataInner
     */
    'enable_dependent_policy&quot;'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LeaveManagementGetTimeOffPolicyByIdResponseDataInner
     */
    'blocks_enabled'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LeaveManagementGetTimeOffPolicyByIdResponseDataInner
     */
    'no_reset'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LeaveManagementGetTimeOffPolicyByIdResponseDataInner
     */
    'termination_recalculation'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LeaveManagementGetTimeOffPolicyByIdResponseDataInner
     */
    'enable_service_accruals'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LeaveManagementGetTimeOffPolicyByIdResponseDataInner
     */
    'child_allowance_enabled'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LeaveManagementGetTimeOffPolicyByIdResponseDataInner
     */
    'enable_negative_carryover'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LeaveManagementGetTimeOffPolicyByIdResponseDataInner
     */
    'max_accrual'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LeaveManagementGetTimeOffPolicyByIdResponseDataInner
     */
    'accrue_at_start'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LeaveManagementGetTimeOffPolicyByIdResponseDataInner
     */
    'enable_monthly_expiration'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LeaveManagementGetTimeOffPolicyByIdResponseDataInner
     */
    'starter_monthly_accrual_limitation'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LeaveManagementGetTimeOffPolicyByIdResponseDataInner
     */
    'starter_yearly_accrual_limitation'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LeaveManagementGetTimeOffPolicyByIdResponseDataInner
     */
    'auto_approves'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LeaveManagementGetTimeOffPolicyByIdResponseDataInner
     */
    'enable_specific_approvers'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LeaveManagementGetTimeOffPolicyByIdResponseDataInner
     */
    'override_approvers_enabled'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LeaveManagementGetTimeOffPolicyByIdResponseDataInner
     */
    'enable_duplicate_time_offs'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LeaveManagementGetTimeOffPolicyByIdResponseDataInner
     */
    'enable_replacement'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LeaveManagementGetTimeOffPolicyByIdResponseDataInner
     */
    'replacement_required'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LeaveManagementGetTimeOffPolicyByIdResponseDataInner
     */
    'enable_scopped_replacement'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LeaveManagementGetTimeOffPolicyByIdResponseDataInner
     */
    'enable_replacement_away'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LeaveManagementGetTimeOffPolicyByIdResponseDataInner
     */
    'enable_details'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LeaveManagementGetTimeOffPolicyByIdResponseDataInner
     */
    'require_details'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LeaveManagementGetTimeOffPolicyByIdResponseDataInner
     */
    'additional_field'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LeaveManagementGetTimeOffPolicyByIdResponseDataInner
     */
    'enable_attachment'?: boolean;
}

