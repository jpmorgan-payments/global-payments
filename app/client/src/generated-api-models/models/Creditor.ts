/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AdditionalCreditor } from './AdditionalCreditor';
import type { CountryOfResidence } from './CountryOfResidence';
import type { CreditorAccount } from './CreditorAccount';
import type { DateAndPlaceOfBirth } from './DateAndPlaceOfBirth';
import type { DeviceInfo } from './DeviceInfo';
import type { PartyIdentifier } from './PartyIdentifier';
import type { PostalAddress } from './PostalAddress';
import type { UltimateCreditor } from './UltimateCreditor';

export type Creditor = {
    creditorAccount: CreditorAccount;
    /**
     * **Credit Transfer Payments**
     *
     * Mandatory for RTP Markets :-
     *
     * | Market |
     * | ------ |
     * |  UK    |
     * |  SEPA  |
     * |  US    |
     *
     *
     * Mandatory for RTP markets for Pay to Account transactions :-
     *
     * |  Market    |
     * | -----------|
     * |  Singapore |
     * |  Australia |
     * |  Mexico    |
     * |  Hong Kong |
     * |  Brazil    |
     *
     *
     * Mandatory For Alternate Payments :-
     *
     * | Alternate Payments | Market        |
     * | -------------------| --------------|
     * | Push To Card       | US and Canada |
     *
     *
     * Mandatory for ACH Payments :-
     *
     * |  Market    |
     * | -----------|
     * |  Chile |
     *
     *
     * Maximum length supported per instrument/market :-
     *
     * | Payment Type | Market | Max Length |
     * | --- | --- | --- |
     * | RTP | UK | 40 |
     * | RTP | Singapore | 140 |
     * | RTP | Australia | 140 |
     * | RTP | Hong Kong | 140 |
     * | RTP | Indonesia | 140 |
     * | RTP | Mexico | 40 |
     * | Push To Card | US/Canada | 30 |
     * | ACH | Chile | 70 |
     * | SEPA Instant| SEPA Zone | 140 |
     *
     * **Direct Debit Payments**
     *
     * Maximum length supported per instrument/market :-
     *
     * | Payment Type | Market | Max Length |
     * | --- | --- | --- |
     * | RTP | Malaysia | 140 |
     */
    creditorName: string;
    creditorDevice?: DeviceInfo;
    postalAddress?: PostalAddress;
    dateAndPlaceOfBirth?: DateAndPlaceOfBirth;
    countryOfResidence?: CountryOfResidence;
    ultimateCreditor?: UltimateCreditor;
    additionalCreditors?: Array<AdditionalCreditor>;
    partyIdentifiers?: PartyIdentifier;
};

