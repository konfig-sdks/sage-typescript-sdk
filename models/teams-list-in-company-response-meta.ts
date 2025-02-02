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
 * @interface TeamsListInCompanyResponseMeta
 */
export interface TeamsListInCompanyResponseMeta {
    /**
     * 
     * @type {number}
     * @memberof TeamsListInCompanyResponseMeta
     */
    'current_page'?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamsListInCompanyResponseMeta
     */
    'next_page'?: number;
    /**
     * 
     * @type {string}
     * @memberof TeamsListInCompanyResponseMeta
     */
    'previous_page'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof TeamsListInCompanyResponseMeta
     */
    'total_pages'?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamsListInCompanyResponseMeta
     */
    'per_page'?: number;
    /**
     * 
     * @type {number}
     * @memberof TeamsListInCompanyResponseMeta
     */
    'total_entries'?: number;
}

