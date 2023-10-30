/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AdditionalIdentifier } from './AdditionalIdentifier';
import type { CountryOfResidence } from './CountryOfResidence';
import type { DateAndPlaceOfBirth } from './DateAndPlaceOfBirth';
import type { PartyIdentifier } from './PartyIdentifier';
import type { PostalAddress } from './PostalAddress';

export type UltimateDebtor = (PartyIdentifier & {
    /**
     * Mandatory for US RTP
     * Maximum length supported :-
     * Push To Card  - 25
     */
    ultimateDebtorName?: string;
    dateAndPlaceOfBirth?: DateAndPlaceOfBirth;
    countryOfResidence?: CountryOfResidence;
    postalAddress?: PostalAddress;
    additionalIdentifiers?: Array<AdditionalIdentifier>;
});

