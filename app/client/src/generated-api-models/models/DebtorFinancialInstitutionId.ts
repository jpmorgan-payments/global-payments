/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountIdentification } from './AccountIdentification';
import type { IdType } from './IdType';

/**
 * Financial institution identifier of debtor
 */
export type DebtorFinancialInstitutionId = {
    /**
     * **Credit Transfer Payment**
     * Not applicable for US RTP
     *
     * Mandatory RTP markets:-
     * UK
     * India
     * Singapore
     * Australia
     * Malaysia
     * Hong Kong
     * SEPA Instant
     * Brazil
     * Mexico
     * Alternate Payments:-
     * Push To Card - US/Canada
     * Interac - Canada
     *
     * ACH:-
     * Chile
     *
     * Mandatory Blockchain (Coin) Payment markets:-
     * US
     * SEPA
     */
    bic?: DebtorFinancialInstitutionId.bic;
    /**
     * **Credit Transfer Payment**
     * Not applicable to UK, India, Singapore, Australia, Mexico Faster
     * Payments.
     *
     * Mandatory for US RTP
     *
     * **Direct Debit Payment**
     * Mandatory for Malaysia RTP
     */
    clearingSystemId?: {
        id?: AccountIdentification;
        idType?: IdType;
    };
};

export namespace DebtorFinancialInstitutionId {

    /**
     * **Credit Transfer Payment**
     * Not applicable for US RTP
     *
     * Mandatory RTP markets:-
     * UK
     * India
     * Singapore
     * Australia
     * Malaysia
     * Hong Kong
     * SEPA Instant
     * Brazil
     * Mexico
     * Alternate Payments:-
     * Push To Card - US/Canada
     * Interac - Canada
     *
     * ACH:-
     * Chile
     *
     * Mandatory Blockchain (Coin) Payment markets:-
     * US
     * SEPA
     */
    export enum bic {
        CHASGB2L = 'CHASGB2L',
        CHASINBX = 'CHASINBX',
        CHASAU2X = 'CHASAU2X',
        CHASSGSG = 'CHASSGSG',
        CHASUS33 = 'CHASUS33',
        CHASMYKX = 'CHASMYKX',
        CHASHKHH = 'CHASHKHH',
        CHASBRSP = 'CHASBRSP',
        CHASDEFX = 'CHASDEFX',
        CHASLULX = 'CHASLULX',
        CHASNL2X = 'CHASNL2X',
        CHASIE4L = 'CHASIE4L',
        CHASMXMX = 'CHASMXMX',
        CHASCATT = 'CHASCATT',
        CHASIDJX = 'CHASIDJX',
        CHASUS33MCY = 'CHASUS33MCY',
        CHASDEFXONX = 'CHASDEFXONX',
        CHASCLRM = 'CHASCLRM',
    }


}

