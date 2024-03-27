/*
Sage HR API

All requests are required to be sent to your subdomain. To learn how to enable API in your Sage HR account, please visit https://support.sage.hr/en/articles/3246469-how-does-cakehr-api-work

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { EmployeeGetCustomFieldsResponseDataInnerValue } from './employee-get-custom-fields-response-data-inner-value';

/**
 * 
 * @export
 * @interface EmployeeGetCustomFieldsResponseDataInner
 */
export interface EmployeeGetCustomFieldsResponseDataInner {
    /**
     * 
     * @type {number}
     * @memberof EmployeeGetCustomFieldsResponseDataInner
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof EmployeeGetCustomFieldsResponseDataInner
     */
    'label'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeeGetCustomFieldsResponseDataInner
     */
    'type'?: string;
    /**
     * 
     * @type {EmployeeGetCustomFieldsResponseDataInnerValue}
     * @memberof EmployeeGetCustomFieldsResponseDataInner
     */
    'value'?: EmployeeGetCustomFieldsResponseDataInnerValue;
    /**
     * 
     * @type {Array<string>}
     * @memberof EmployeeGetCustomFieldsResponseDataInner
     */
    'options'?: Array<string> | null;
}

