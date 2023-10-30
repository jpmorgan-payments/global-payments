/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountCurrency } from './AccountCurrency';
import type { AccountIdWrapper } from './AccountIdWrapper';
import type { AccountType } from './AccountType';

export type DebtorAccount = (AccountIdWrapper & {
    accountType?: AccountType;
    accountCurrency?: AccountCurrency;
});

