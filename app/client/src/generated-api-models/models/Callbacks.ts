/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FxApplied } from './FxApplied';

/**
 * List of Error codes and Rule definitions. errorDescription is
 * dynamically generated hence not shown here.
 *
 * | Error Code        |            Rule Definition                          |
 * |-------------------|-----------------------------------------------------|
 * | `10001`           | Mandatory field is missing or invalid               |
 * | `10002`           | Minimum length validation failure                   |
 * | `10003`           | Maximum length validation failure                   |
 * | `10004`           | Date validation failure                             |
 * | `10005`           | Amount validation failure ~ value more than maximum |
 * | `10006`           | Amount validation failure ~ value less than minimum |
 * | `10007`           | Amount validation failure ~ value is not a number   |
 * | `10008`           | Validation failure ~ unexpected value provided      |
 * | `10009`           | Invalid Id provided                                 |
 * | `10010`           | Personal information validation failure             |
 * | `11000`           | Clearing/Regulatory failure                         |
 * | `12000`           | System error                                        |
 * | `13000`           | Uncategorized error                                 |
 */
export type Callbacks = Array<{
    endToEndId?: string;
    firmRootId?: string;
    /**
     * The clearing system reference
     */
    clearingSystemReference?: string;
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
     * COMPLETED_CREDITED - Status indicating the beneficiary's account
     * has been credited
     *
     * REJECTED - Payment has been rejected. Please refer to the
     * exception object for error details
     *
     * RETURNED - Payment has been retured to the debtor party
     *
     * BLOCKED - Payment blocked due to sanctions issue
     *
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
     * ACH Flows (Chile) -
     *
     * PENDING -> COMPLETED
     *
     * PENDING - REJECTED
     *
     *
     * Blockchain (Coin) Flows -
     *
     * PENDING -> PENDING_POSTING -> COMPLETED
     *
     * PENDING -> REJECTED
     */
    paymentStatus?: 'PENDING' | 'PENDING_POSTING' | 'COMPLETED' | 'COMPLETED_CREDITED' | 'REJECTED' | 'RETURNED' | 'BLOCKED';
    exceptions?: Array<{
        errorCode?: string;
        errorDescription?: string;
        ruleDefinition?: string;
        externalCode?: string;
    }>;
    fx?: FxApplied;
}>;
