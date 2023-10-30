/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Code } from './Code';
import type { Proprietary } from './Proprietary';

/**
 * Can be used when the underlying payer is a Legal Entity. It should be used together with Ultimate Debtor Name and address, and it should contain the payment account number of the underlying payer. In case the transfer has not been initiated from a payment account, the value populated should be a unique transaction identifier of the underlying payer which permits the traceability of the transaction back to them.
 *
 * Applicable markets and rules
 *
 * Can be used for ultimateDebtor and ultimateCreditor for the following
 *
 * RTP markets :-
 *
 * SEPA
 *
 * Mexico
 *
 * UK
 *
 * US
 *
 * ***Australia Faster Payments - Only to be used for ultimateCreditor.
 * For Australia Faster Payments, only id and schemeName.proprietary fields
 * are applicable
 *
 *
 * ACH markets :-
 * Chile
 *
 *
 */
export type OrganizationID = {
    /**
     * For AU Superannuation payment (category payment), populate with USI number for the Superannuation fund
     *
     * Max length for ACH :-
     * Chile - 255
     */
    id: string;
    bic?: string;
    /**
     * Max length for ACH :-
     * Chile - 35
     */
    issuer?: string;
    /**
     * type of scheme
     * Mandatory for SEPA Instant. Check proprietary field rules for more information.
     */
    schemeName?: {
        code?: Code;
        proprietary?: Proprietary;
    };
};

