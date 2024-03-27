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
 * @interface IntegrationsTransferSalaryInformationResponseData
 */
export interface IntegrationsTransferSalaryInformationResponseData {
    /**
     * 
     * @type {number}
     * @memberof IntegrationsTransferSalaryInformationResponseData
     */
    'compensation_id'?: number;
    /**
     * 
     * @type {number}
     * @memberof IntegrationsTransferSalaryInformationResponseData
     */
    'employee_number'?: number;
    /**
     * 
     * @type {string}
     * @memberof IntegrationsTransferSalaryInformationResponseData
     */
    'contract_number'?: string;
    /**
     * 
     * @type {string}
     * @memberof IntegrationsTransferSalaryInformationResponseData
     */
    'type'?: string;
    /**
     * 
     * @type {string}
     * @memberof IntegrationsTransferSalaryInformationResponseData
     */
    'start_date'?: string;
    /**
     * 
     * @type {string}
     * @memberof IntegrationsTransferSalaryInformationResponseData
     */
    'end_date'?: string;
    /**
     * 
     * @type {number}
     * @memberof IntegrationsTransferSalaryInformationResponseData
     */
    'amount'?: number;
    /**
     * 
     * @type {number}
     * @memberof IntegrationsTransferSalaryInformationResponseData
     */
    'status'?: number;
}

