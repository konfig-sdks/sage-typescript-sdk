/*
Sage HR API

All requests are required to be sent to your subdomain. To learn how to enable API in your Sage HR account, please visit https://support.sage.hr/en/articles/3246469-how-does-cakehr-api-work

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { RecruitmentGetPositionDetailsResponseDataApplicantsInner } from './recruitment-get-position-details-response-data-applicants-inner';
import { RecruitmentGetPositionDetailsResponseDataDescriptionBlocksInner } from './recruitment-get-position-details-response-data-description-blocks-inner';
import { RecruitmentGetPositionDetailsResponseDataHiringTeamInner } from './recruitment-get-position-details-response-data-hiring-team-inner';

/**
 * 
 * @export
 * @interface RecruitmentGetPositionDetailsResponseData
 */
export interface RecruitmentGetPositionDetailsResponseData {
    /**
     * 
     * @type {string}
     * @memberof RecruitmentGetPositionDetailsResponseData
     */
    'title'?: string;
    /**
     * 
     * @type {number}
     * @memberof RecruitmentGetPositionDetailsResponseData
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof RecruitmentGetPositionDetailsResponseData
     */
    'status'?: string;
    /**
     * 
     * @type {string}
     * @memberof RecruitmentGetPositionDetailsResponseData
     */
    'visibility'?: string;
    /**
     * 
     * @type {string}
     * @memberof RecruitmentGetPositionDetailsResponseData
     */
    'created_at'?: string;
    /**
     * 
     * @type {string}
     * @memberof RecruitmentGetPositionDetailsResponseData
     */
    'internal_date'?: string;
    /**
     * 
     * @type {string}
     * @memberof RecruitmentGetPositionDetailsResponseData
     */
    'completed_at'?: string;
    /**
     * 
     * @type {string}
     * @memberof RecruitmentGetPositionDetailsResponseData
     */
    'link'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RecruitmentGetPositionDetailsResponseData
     */
    'team'?: string;
    /**
     * 
     * @type {number}
     * @memberof RecruitmentGetPositionDetailsResponseData
     */
    'applicants_required'?: number;
    /**
     * 
     * @type {number}
     * @memberof RecruitmentGetPositionDetailsResponseData
     */
    'applicants_count'?: number;
    /**
     * 
     * @type {string}
     * @memberof RecruitmentGetPositionDetailsResponseData
     */
    'employment_type'?: string;
    /**
     * 
     * @type {string}
     * @memberof RecruitmentGetPositionDetailsResponseData
     */
    'location'?: string;
    /**
     * 
     * @type {number}
     * @memberof RecruitmentGetPositionDetailsResponseData
     */
    'location_id'?: number;
    /**
     * 
     * @type {string}
     * @memberof RecruitmentGetPositionDetailsResponseData
     */
    'group'?: string;
    /**
     * 
     * @type {number}
     * @memberof RecruitmentGetPositionDetailsResponseData
     */
    'group_id'?: number;
    /**
     * 
     * @type {number}
     * @memberof RecruitmentGetPositionDetailsResponseData
     */
    'priority'?: number;
    /**
     * 
     * @type {Array<RecruitmentGetPositionDetailsResponseDataDescriptionBlocksInner>}
     * @memberof RecruitmentGetPositionDetailsResponseData
     */
    'description_blocks'?: Array<RecruitmentGetPositionDetailsResponseDataDescriptionBlocksInner>;
    /**
     * 
     * @type {Array<RecruitmentGetPositionDetailsResponseDataApplicantsInner>}
     * @memberof RecruitmentGetPositionDetailsResponseData
     */
    'applicants'?: Array<RecruitmentGetPositionDetailsResponseDataApplicantsInner>;
    /**
     * 
     * @type {Array<RecruitmentGetPositionDetailsResponseDataHiringTeamInner>}
     * @memberof RecruitmentGetPositionDetailsResponseData
     */
    'hiring_team'?: Array<RecruitmentGetPositionDetailsResponseDataHiringTeamInner>;
}

