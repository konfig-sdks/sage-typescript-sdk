/* tslint:disable */
/* eslint-disable */
/*
Sage HR API

All requests are required to be sent to your subdomain. To learn how to enable API in your Sage HR account, please visit https://support.sage.hr/en/articles/3246469-how-does-cakehr-api-work

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
import { fromBuffer } from "file-type/browser"
const FormData = require("form-data")
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { LeaveManagementCreateKitDay422Response } from '../models';
// @ts-ignore
import { LeaveManagementCreateKitDayRequest } from '../models';
// @ts-ignore
import { LeaveManagementCreateKitDayResponse } from '../models';
// @ts-ignore
import { LeaveManagementGetKitDaysResponse } from '../models';
// @ts-ignore
import { LeaveManagementProcessKitDayRequest } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * PoliciesApi - axios parameter creator
 * @export
 */
export const PoliciesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create a KIT day in a leave
         * @param {number} policyId Time-off policy identifier
         * @param {number} employeeId Employee identifier
         * @param {LeaveManagementCreateKitDayRequest} leaveManagementCreateKitDayRequest 
         * @param {string} [date] Date of single-day KIT day
         * @param {string} [dateFrom] Start date of a multi-day KIT day
         * @param {string} [dateTo] End date of a multi-day KIT day
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createKitDay: async (policyId: number, employeeId: number, leaveManagementCreateKitDayRequest: LeaveManagementCreateKitDayRequest, date?: string, dateFrom?: string, dateTo?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'policyId' is not null or undefined
            assertParamExists('createKitDay', 'policyId', policyId)
            // verify required parameter 'employeeId' is not null or undefined
            assertParamExists('createKitDay', 'employeeId', employeeId)
            // verify required parameter 'leaveManagementCreateKitDayRequest' is not null or undefined
            assertParamExists('createKitDay', 'leaveManagementCreateKitDayRequest', leaveManagementCreateKitDayRequest)
            const localVarPath = `/leave-management/kit-days`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "X-Auth-Token", keyParamName: "apiKey", configuration })

            if (policyId !== undefined) {
                await addFormParam('policy_id', policyId, false, true)
            }
    
            if (employeeId !== undefined) {
                await addFormParam('employee_id', employeeId, false, true)
            }
    
            if (date !== undefined) {
                await addFormParam('date', date, false, true)
            }
    
            if (dateFrom !== undefined) {
                await addFormParam('date_from', dateFrom, false, true)
            }
    
            if (dateTo !== undefined) {
                await addFormParam('date_to', dateTo, false, true)
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
    
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: leaveManagementCreateKitDayRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/leave-management/kit-days',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(leaveManagementCreateKitDayRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary View all the KIT days of an employee in a policy
         * @param {number} policyId Time-off policy identifier
         * @param {number} employeeId Employee identifier
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getKitDays: async (policyId: number, employeeId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'policyId' is not null or undefined
            assertParamExists('getKitDays', 'policyId', policyId)
            // verify required parameter 'employeeId' is not null or undefined
            assertParamExists('getKitDays', 'employeeId', employeeId)
            const localVarPath = `/leave-management/kit-days`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "X-Auth-Token", keyParamName: "apiKey", configuration })
            if (policyId !== undefined) {
                localVarQueryParameter['policy_id'] = policyId;
            }

            if (employeeId !== undefined) {
                localVarQueryParameter['employee_id'] = employeeId;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/leave-management/kit-days',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Approve, decline or cancel a KIT day
         * @param {number} id KIT day identifier
         * @param {string} status Action to apply to the specified KIT day
         * @param {LeaveManagementProcessKitDayRequest} leaveManagementProcessKitDayRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        processKitDay: async (id: number, status: string, leaveManagementProcessKitDayRequest: LeaveManagementProcessKitDayRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('processKitDay', 'id', id)
            // verify required parameter 'status' is not null or undefined
            assertParamExists('processKitDay', 'status', status)
            // verify required parameter 'leaveManagementProcessKitDayRequest' is not null or undefined
            assertParamExists('processKitDay', 'leaveManagementProcessKitDayRequest', leaveManagementProcessKitDayRequest)
            const localVarPath = `/leave-management/kit-days/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "X-Auth-Token", keyParamName: "apiKey", configuration })

            if (status !== undefined) {
                await addFormParam('status', status, false, true)
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
    
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: leaveManagementProcessKitDayRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/leave-management/kit-days/{id}',
                httpMethod: 'PATCH'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(leaveManagementProcessKitDayRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PoliciesApi - functional programming interface
 * @export
 */
export const PoliciesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PoliciesApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Create a KIT day in a leave
         * @param {PoliciesApiCreateKitDayRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createKitDay(requestParameters: PoliciesApiCreateKitDayRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LeaveManagementCreateKitDayResponse>> {
            const leaveManagementCreateKitDayRequest: LeaveManagementCreateKitDayRequest = {
                policy_id: requestParameters.policy_id,
                employee_id: requestParameters.employee_id,
                date: requestParameters.date,
                date_from: requestParameters.date_from,
                date_to: requestParameters.date_to
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createKitDay(requestParameters.policyId, requestParameters.employeeId, leaveManagementCreateKitDayRequest, requestParameters.date, requestParameters.dateFrom, requestParameters.dateTo, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary View all the KIT days of an employee in a policy
         * @param {PoliciesApiGetKitDaysRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getKitDays(requestParameters: PoliciesApiGetKitDaysRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LeaveManagementGetKitDaysResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getKitDays(requestParameters.policyId, requestParameters.employeeId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Approve, decline or cancel a KIT day
         * @param {PoliciesApiProcessKitDayRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async processKitDay(requestParameters: PoliciesApiProcessKitDayRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const leaveManagementProcessKitDayRequest: LeaveManagementProcessKitDayRequest = {
                status: requestParameters.status
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.processKitDay(requestParameters.id, requestParameters.status, leaveManagementProcessKitDayRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PoliciesApi - factory interface
 * @export
 */
export const PoliciesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PoliciesApiFp(configuration)
    return {
        /**
         * 
         * @summary Create a KIT day in a leave
         * @param {PoliciesApiCreateKitDayRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createKitDay(requestParameters: PoliciesApiCreateKitDayRequest, options?: AxiosRequestConfig): AxiosPromise<LeaveManagementCreateKitDayResponse> {
            return localVarFp.createKitDay(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary View all the KIT days of an employee in a policy
         * @param {PoliciesApiGetKitDaysRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getKitDays(requestParameters: PoliciesApiGetKitDaysRequest, options?: AxiosRequestConfig): AxiosPromise<LeaveManagementGetKitDaysResponse> {
            return localVarFp.getKitDays(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Approve, decline or cancel a KIT day
         * @param {PoliciesApiProcessKitDayRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        processKitDay(requestParameters: PoliciesApiProcessKitDayRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.processKitDay(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createKitDay operation in PoliciesApi.
 * @export
 * @interface PoliciesApiCreateKitDayRequest
 */
export type PoliciesApiCreateKitDayRequest = {
    
    /**
    * Time-off policy identifier
    * @type {number}
    * @memberof PoliciesApiCreateKitDay
    */
    readonly policyId: number
    
    /**
    * Employee identifier
    * @type {number}
    * @memberof PoliciesApiCreateKitDay
    */
    readonly employeeId: number
    
    /**
    * Date of single-day KIT day
    * @type {string}
    * @memberof PoliciesApiCreateKitDay
    */
    readonly date?: string
    
    /**
    * Start date of a multi-day KIT day
    * @type {string}
    * @memberof PoliciesApiCreateKitDay
    */
    readonly dateFrom?: string
    
    /**
    * End date of a multi-day KIT day
    * @type {string}
    * @memberof PoliciesApiCreateKitDay
    */
    readonly dateTo?: string
    
} & LeaveManagementCreateKitDayRequest

/**
 * Request parameters for getKitDays operation in PoliciesApi.
 * @export
 * @interface PoliciesApiGetKitDaysRequest
 */
export type PoliciesApiGetKitDaysRequest = {
    
    /**
    * Time-off policy identifier
    * @type {number}
    * @memberof PoliciesApiGetKitDays
    */
    readonly policyId: number
    
    /**
    * Employee identifier
    * @type {number}
    * @memberof PoliciesApiGetKitDays
    */
    readonly employeeId: number
    
}

/**
 * Request parameters for processKitDay operation in PoliciesApi.
 * @export
 * @interface PoliciesApiProcessKitDayRequest
 */
export type PoliciesApiProcessKitDayRequest = {
    
    /**
    * KIT day identifier
    * @type {number}
    * @memberof PoliciesApiProcessKitDay
    */
    readonly id: number
    
    /**
    * Action to apply to the specified KIT day
    * @type {string}
    * @memberof PoliciesApiProcessKitDay
    */
    readonly status: string
    
} & LeaveManagementProcessKitDayRequest

/**
 * PoliciesApiGenerated - object-oriented interface
 * @export
 * @class PoliciesApiGenerated
 * @extends {BaseAPI}
 */
export class PoliciesApiGenerated extends BaseAPI {
    /**
     * 
     * @summary Create a KIT day in a leave
     * @param {PoliciesApiCreateKitDayRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PoliciesApiGenerated
     */
    public createKitDay(requestParameters: PoliciesApiCreateKitDayRequest, options?: AxiosRequestConfig) {
        return PoliciesApiFp(this.configuration).createKitDay(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary View all the KIT days of an employee in a policy
     * @param {PoliciesApiGetKitDaysRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PoliciesApiGenerated
     */
    public getKitDays(requestParameters: PoliciesApiGetKitDaysRequest, options?: AxiosRequestConfig) {
        return PoliciesApiFp(this.configuration).getKitDays(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Approve, decline or cancel a KIT day
     * @param {PoliciesApiProcessKitDayRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PoliciesApiGenerated
     */
    public processKitDay(requestParameters: PoliciesApiProcessKitDayRequest, options?: AxiosRequestConfig) {
        return PoliciesApiFp(this.configuration).processKitDay(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
