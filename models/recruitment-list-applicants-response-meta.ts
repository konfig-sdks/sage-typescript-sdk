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
 * @interface RecruitmentListApplicantsResponseMeta
 */
export interface RecruitmentListApplicantsResponseMeta {
    /**
     * 
     * @type {number}
     * @memberof RecruitmentListApplicantsResponseMeta
     */
    'current_page'?: number;
    /**
     * 
     * @type {string}
     * @memberof RecruitmentListApplicantsResponseMeta
     */
    'next_page'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RecruitmentListApplicantsResponseMeta
     */
    'previous_page'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof RecruitmentListApplicantsResponseMeta
     */
    'total_pages'?: number;
    /**
     * 
     * @type {number}
     * @memberof RecruitmentListApplicantsResponseMeta
     */
    'per_page'?: number;
    /**
     * 
     * @type {number}
     * @memberof RecruitmentListApplicantsResponseMeta
     */
    'total_entries'?: number;
}

