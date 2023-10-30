/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Code } from './Code';
import type { Proprietary } from './Proprietary';

/**
 * Can be used if organization ID is not populated, when the underlying payer is an Individual. It should be used together with Ultimate Debtor Name and address, and it should contain the payment account number of the underlying payer. In case the transfer has not been initiated from a payment account, the value populated should be a unique transaction identifier of the underlying payer which permits the traceability of the transaction back to them
 *
 * applicable RTP markets :-
 * SEPA
 *
 * Mexico
 *
 * UK
 *
 * US
 *
 * ACH markets :-
 * Chile
 */
export type IndividualID = {
    /**
     * Max length for ACH :-
     * Chile - 255
     */
    id: string;
    /**
     * Max length for ACH :-
     * Chile - 35
     */
    issuer?: string;
    /**
     * type of scheme
     */
    schemeName?: {
        code?: Code;
        proprietary?: Proprietary;
    };
};

