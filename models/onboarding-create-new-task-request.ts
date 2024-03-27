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
 * @interface OnboardingCreateNewTaskRequest
 */
export interface OnboardingCreateNewTaskRequest {
    /**
     * 
     * @type {string}
     * @memberof OnboardingCreateNewTaskRequest
     */
    'title': string;
    /**
     * 
     * @type {string}
     * @memberof OnboardingCreateNewTaskRequest
     */
    'description'?: string;
    /**
     * 
     * @type {number}
     * @memberof OnboardingCreateNewTaskRequest
     */
    'boarding_task_template_category_id': number;
    /**
     * Due date in days after employee start date
     * @type {number}
     * @memberof OnboardingCreateNewTaskRequest
     */
    'due_in': number;
    /**
     * Default: self; leader - direct manager; employee - specific employee via assignee_id
     * @type {string}
     * @memberof OnboardingCreateNewTaskRequest
     */
    'default_assignee_type'?: OnboardingCreateNewTaskRequestDefaultAssigneeTypeEnum;
    /**
     * Specific assignee if default_assignee_type is \'employee\'
     * @type {number}
     * @memberof OnboardingCreateNewTaskRequest
     */
    'assignee_id'?: number;
    /**
     * \'true\' to enabled required attachment
     * @type {string}
     * @memberof OnboardingCreateNewTaskRequest
     */
    'require_attachment'?: string;
    /**
     * Task start date in days after employee start date
     * @type {number}
     * @memberof OnboardingCreateNewTaskRequest
     */
    'add_after'?: number;
}

type OnboardingCreateNewTaskRequestDefaultAssigneeTypeEnum = 'self' | 'leader' | 'employee'


