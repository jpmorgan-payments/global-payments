/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CategoryPurpose } from './CategoryPurpose';
import type { Creditor } from './Creditor';
import type { CreditorAgent } from './CreditorAgent';
import type { Debtor } from './Debtor';
import type { DebtorAgent } from './DebtorAgent';
import type { PaymentIdentifiers } from './PaymentIdentifiers';
import type { PaymentType } from './PaymentType';
import type { Purpose } from './Purpose';
import type { RemittanceInformation } from './RemittanceInformation';
import type { SecureVerification } from './SecureVerification';
import type { TaxInformation } from './TaxInformation';

export type Payments = {
    /**
     * Optional field to indicate a duplicate payment
     */
    possibleDuplicateMessage?: boolean;
    /**
     * Requested date on which/by which the transaction should be executed ISO Date format. (YYYY-MM-DD)
     */
    requestedExecutionDate: string;
    paymentIdentifiers: PaymentIdentifiers;
    /**
     * 3- character ISO currency code. E.g. SGD, GBP, AUD, EUR, MXN, CLP
     */
    paymentCurrency: string;
    /**
     * Amount should be more than 0.01 with maximum of two decimal places allowed
     *
     * NOTE: For Chile ACH, decimals are not accepted
     *
     * Maximum amount allowed per market/instrument :-
     *
     * UK FPS - GBP 1,000,000
     *
     * SEPA Instant  - EUR 100,000
     */
    paymentAmount: number;
    paymentType?: PaymentType;
    debtor: Debtor;
    debtorAgent: DebtorAgent;
    creditorAgent?: CreditorAgent;
    creditor: Creditor;
    /**
     * To indicate the transaction is a credit transfer or direct debit
     * transfer. This indicator also determines the originator and receiver
     * is the debit and credit side of this transaction.
     *
     * Supported value per market/instrument :-
     *
     * UK Faster Payments - CREDIT
     *
     * Singapore Faster Payments - CREDIT
     *
     * Australia Faster Payments - CREDIT
     *
     * Singapore Faster Payments - CREDIT
     *
     * Hong Kong Faster Payments - CREDIT
     *
     * Malaysia Faster Payments - CREDIT &amp; DEBIT
     *
     * SEPA Instant - CREDIT
     *
     * Indonesia RTP - CREDIT
     *
     * Brazil RTP - CREDIT
     *
     * US RTP - CREDIT
     *
     * Push To Card - CREDIT
     *
     * ACH Chile Low Value - CREDIT
     *
     * Blockchain (coin) Payments - CREDIT
     */
    transferType: Payments.transferType;
    purpose?: Purpose;
    categoryPurpose?: CategoryPurpose;
    remittanceInformation?: RemittanceInformation;
    taxInformation?: TaxInformation;
    /**
     * Applies only for Interac proxy payments
     */
    secureVerification?: Array<SecureVerification>;
    /**
     * Applies only for Interac proxy Payments. Format expected - YYYY-MM-DDThh:mm:ss+/-time offset to UTC
     */
    paymentExpiryDate?: string;
    chargeBearer?: Payments.chargeBearer;
};

export namespace Payments {

    /**
     * To indicate the transaction is a credit transfer or direct debit
     * transfer. This indicator also determines the originator and receiver
     * is the debit and credit side of this transaction.
     *
     * Supported value per market/instrument :-
     *
     * UK Faster Payments - CREDIT
     *
     * Singapore Faster Payments - CREDIT
     *
     * Australia Faster Payments - CREDIT
     *
     * Singapore Faster Payments - CREDIT
     *
     * Hong Kong Faster Payments - CREDIT
     *
     * Malaysia Faster Payments - CREDIT &amp; DEBIT
     *
     * SEPA Instant - CREDIT
     *
     * Indonesia RTP - CREDIT
     *
     * Brazil RTP - CREDIT
     *
     * US RTP - CREDIT
     *
     * Push To Card - CREDIT
     *
     * ACH Chile Low Value - CREDIT
     *
     * Blockchain (coin) Payments - CREDIT
     */
    export enum transferType {
        CREDIT = 'CREDIT',
        DEBIT = 'DEBIT',
    }

    export enum chargeBearer {
        CREDITOR = 'CREDITOR',
        DEBTOR = 'DEBTOR',
    }


}

