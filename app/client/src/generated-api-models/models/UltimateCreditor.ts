/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CountryOfResidence } from './CountryOfResidence';
import type { DateAndPlaceOfBirth } from './DateAndPlaceOfBirth';
import type { PartyIdentifier } from './PartyIdentifier';
import type { PostalAddress } from './PostalAddress';

export type UltimateCreditor = (PartyIdentifier & {
    /**
     * Mandatory for US RTP &amp; US FedNow
     */
    ultimateCreditorName?: string;
    dateAndPlaceOfBirth?: DateAndPlaceOfBirth;
    countryOfResidence?: CountryOfResidence;
    postalAddress?: PostalAddress;
});

