/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FxApplied } from './FxApplied';

export type CoreStatus = {
    createDateTime?: string;
    /**
     * Status of the payment.
     *
     * PENDING - Payment is pending processing
     *
     * PENDING_POSTING - Payment is yet to be posted in the beneficiary
     * account
     *
     * COMPLETED - Payment has successfully completed
     *
     * COMPLETED_CREDITED - Status indicating the beneficiary's account has
     * been credited
     *
     * REJECTED - Payment has been rejected. Please refer to the exception
     * object for error details
     *
     * RETURNED - Payment has been retured to the debtor party
     *
     * BLOCKED - Payment blocked due to sanctions issue
     *
     *
     *
     * RTP Flows (All Markets) -
     *
     * PENDING -> COMPLETED
     *
     * PENDING -> REJECTED
     *
     *
     * Additional Flows(RTP)->
     *
     * US  -
     *
     * PENDING -> PENDING_POSTING -> COMPLETED
     *
     * PENDING -> BLOCKED
     *
     *
     * Hong Kong -
     *
     * PENDING -> COMPLETED -> COMPLETED_CREDITED
     *
     *
     * Push To Card Flows -
     *
     * PENDING -> COMPLETED
     *
     * PENDING -> REJECTED
     *
     * PENDING -> COMPLETED -> RETURNED
     *
     *
     * Blockchain (Coin) Flows -
     *
     * PENDING -> PENDING_POSTING -> COMPLETED
     *
     * PENDING -> REJECTED
     */
    status?: CoreStatus.status;
    fx?: FxApplied;
    clearingSystemReference?: string;
    exception?: Array<{
        errorCode?: string;
        errorDescription?: string;
        ruleDefinition?: string;
        externalCode?: string;
    }>;
};

export namespace CoreStatus {

    /**
     * Status of the payment.
     *
     * PENDING - Payment is pending processing
     *
     * PENDING_POSTING - Payment is yet to be posted in the beneficiary
     * account
     *
     * COMPLETED - Payment has successfully completed
     *
     * COMPLETED_CREDITED - Status indicating the beneficiary's account has
     * been credited
     *
     * REJECTED - Payment has been rejected. Please refer to the exception
     * object for error details
     *
     * RETURNED - Payment has been retured to the debtor party
     *
     * BLOCKED - Payment blocked due to sanctions issue
     *
     *
     *
     * RTP Flows (All Markets) -
     *
     * PENDING -> COMPLETED
     *
     * PENDING -> REJECTED
     *
     *
     * Additional Flows(RTP)->
     *
     * US  -
     *
     * PENDING -> PENDING_POSTING -> COMPLETED
     *
     * PENDING -> BLOCKED
     *
     *
     * Hong Kong -
     *
     * PENDING -> COMPLETED -> COMPLETED_CREDITED
     *
     *
     * Push To Card Flows -
     *
     * PENDING -> COMPLETED
     *
     * PENDING -> REJECTED
     *
     * PENDING -> COMPLETED -> RETURNED
     *
     *
     * Blockchain (Coin) Flows -
     *
     * PENDING -> PENDING_POSTING -> COMPLETED
     *
     * PENDING -> REJECTED
     */
    export enum status {
        PENDING = 'PENDING',
        PENDING_POSTING = 'PENDING_POSTING',
        COMPLETED = 'COMPLETED',
        COMPLETED_CREDITED = 'COMPLETED_CREDITED',
        REJECTED = 'REJECTED',
        RETURNED = 'RETURNED',
        BLOCKED = 'BLOCKED',
    }


}

