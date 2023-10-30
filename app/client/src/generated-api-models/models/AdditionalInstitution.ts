/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PostalAddress } from './PostalAddress';

/**
 * Only applicable to UK Faster Payments and Mexico RTP (foreign remittances)
 */
export type AdditionalInstitution = {
    bic?: string;
    name?: string;
    isForeignParty?: boolean;
    postalAddress?: PostalAddress;
};

