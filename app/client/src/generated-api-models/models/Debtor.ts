/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DebtorAccount } from './DebtorAccount';
import type { DebtorDevice } from './DebtorDevice';
import type { UltimateDebtor } from './UltimateDebtor';

export type Debtor = {
    debtorAccount: DebtorAccount;
    /**
     * Mandatory and Supported for :-
     *
     * ACH Chile
     * Push To Card
     * US RTP
     * US FedNow
     * SARIE IPS
     * INTERAC
     * Push To Wallet
     * Maximum length supported per instrument/market :-
     *
     * US RTP: 140
     * Push To Card US &amp; Canada: 30
     * ACH Chile - 140
     * Malaysia RTP (Direct Debit) - 140
     */
    debtorName?: string;
    debtorDevice?: DebtorDevice;
    ultimateDebtor?: UltimateDebtor;
};

