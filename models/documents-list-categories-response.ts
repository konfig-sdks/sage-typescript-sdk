/*
Sage HR API

All requests are required to be sent to your subdomain. To learn how to enable API in your Sage HR account, please visit https://support.sage.hr/en/articles/3246469-how-does-cakehr-api-work

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { DocumentsListCategoriesResponseDataInner } from './documents-list-categories-response-data-inner';

/**
 * 
 * @export
 * @interface DocumentsListCategoriesResponse
 */
export interface DocumentsListCategoriesResponse {
    /**
     * 
     * @type {Array<DocumentsListCategoriesResponseDataInner>}
     * @memberof DocumentsListCategoriesResponse
     */
    'data'?: Array<DocumentsListCategoriesResponseDataInner>;
}

