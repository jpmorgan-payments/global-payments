/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ServiceLevelCode } from './ServiceLevelCode';

/**
 * This field is mandatory for Singapore Faster Payments. Underlying reason for the payment transaction, eg., a charity payment, or  a commercial agreement between the creditor and the debtor.
 * Not applicable for :-
 * UK FPS
 * Push To Card
 */
export type Purpose = {
    code?: ServiceLevelCode;
    type?: Purpose.type;
};

export namespace Purpose {

    export enum type {
        CODE = 'CODE',
        PROPRIETARY = 'PROPRIETARY',
    }


}

