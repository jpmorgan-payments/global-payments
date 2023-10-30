/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Address of the party
 *
 * For UK FPS it is recommended that the combined length of all structured
 * fields should be less than 140 characters
 *
 * SEPA Instant - Only country and addressLine are applicable
 *
 * Push To Card - Include buildingNumber and streetName
 */
export type PostalAddress = {
    /**
     * | Address Type  |            Description                                               |
     * |---------------|----------------------------------------------------------------------|
     * | `ADDR`        | Postal Address is the complete postal address.                       |
     * | `BIZZ`        | Business Address is the business address.                            |
     * | `DLVY`        | DeliveryTo Address is the address to which delivery is to take place.|
     * | `HOME`        | Residential Address is the home address.                             |
     * | `MLTO`        | MailTo Address is the address to which mail is sent.                 |
     * | `PBOX`        | PO Box Address is a postal office (PO) box.                          |
     */
    addressType?: PostalAddress.addressType;
    /**
     * Name of street. Mandatory for US RTP
     * Maximum length applicable :-
     * Push To Card - 35
     */
    streetName?: string;
    /**
     * Building name or number.
     * Maximum length applicable :-
     * Push To Card - 35
     */
    buildingNumber?: string;
    /**
     * Zip code. Mandatory for Wallet Payments and US RTP
     * Maximum length applicable :-
     * Push To Card - 9
     */
    postalCode?: string;
    /**
     * Name of the town. Mandatory for US RTP
     * Maximum length applicable :-
     * Push To Card - 25
     */
    townName?: string;
    /**
     * Mandatory for US RTP
     */
    countrySubDvsn?: string;
    /**
     * 2 character ISO country code.
     * Mandatory for Wallet Payments, US RTP, and Interac
     */
    country?: string;
    /**
     * Not applicable to Wallet Payments. Free form text address lines Up
     * to 4 lines.
     *
     *
     * Maximum number of characters allowed per instrument/market :-
     *
     *
     * UK FPS - 4 lines, 140 characters including spaces
     *
     *
     * SEPA Instant - 2 lines, 70 characters each including spaces
     *
     *
     * Brazil RTP - 7 lines, 70 characters
     *
     *
     * Chile ACH - 2 lines, 35 characters + 1 additional line containing 32 characters
     */
    addressLine?: Array<string>;
};

export namespace PostalAddress {

    /**
     * | Address Type  |            Description                                               |
     * |---------------|----------------------------------------------------------------------|
     * | `ADDR`        | Postal Address is the complete postal address.                       |
     * | `BIZZ`        | Business Address is the business address.                            |
     * | `DLVY`        | DeliveryTo Address is the address to which delivery is to take place.|
     * | `HOME`        | Residential Address is the home address.                             |
     * | `MLTO`        | MailTo Address is the address to which mail is sent.                 |
     * | `PBOX`        | PO Box Address is a postal office (PO) box.                          |
     */
    export enum addressType {
        ADDR = 'ADDR',
        BIZZ = 'BIZZ',
        DLVY = 'DLVY',
        HOME = 'HOME',
        MLTO = 'MLTO',
        PBOX = 'PBOX',
    }


}

