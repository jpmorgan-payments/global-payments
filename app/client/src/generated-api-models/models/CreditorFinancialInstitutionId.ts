/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountIdentification } from './AccountIdentification';
import type { IdType } from './IdType';

/**
 * Financial institution identifier of creditor
 *
 * **For Mexico RTP use either bic or clearing system id for a bank transfer use case. Length supported 8 or 11
 */
export type CreditorFinancialInstitutionId = {
    /**
     * SWIFT BIC. Applicable and Mandatory for RTP markets :-
     * Singapore
     * Malaysia (Credit Transfer and Direct Debit Payments)
     *
     * Optional markets :-
     * SEPA Instant
     * Mexico
     *
     * Mandatory for Blockchain(Coin) Payments:-
     * US - CHASUS33
     * SEPA - CHASDEFX
     *
     * ***NOTE: Mandatory for RTP Direct Debit Payments for all Markets***
     */
    bic?: string;
    /**
     * Clearing system identifier. Applicable and Mandatory for Faster/Real-time payment markets :-
     * UK
     * Australia
     * India
     * Hong Kong
     * US
     * Brazil
     *
     * ACH :-
     * Chile
     */
    clearingSystemId?: {
        id: AccountIdentification;
        /**
         * Branch of the bank. Applicable and Mandatory for Brazil PIX only
         */
        branchNumber?: string;
        idType?: IdType;
    };
};

