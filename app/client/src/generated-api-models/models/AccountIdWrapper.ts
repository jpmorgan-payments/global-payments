/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountId } from './AccountId';
import type { AdditionalAlternateAccountIdentifiers } from './AdditionalAlternateAccountIdentifiers';
import type { AlternateAccountIdentifier } from './AlternateAccountIdentifier';

export type AccountIdWrapper = ({
    accountId: AccountId;
} | {
    alternateAccountIdentifier: AlternateAccountIdentifier;
    additionalAlternateIdentifiers?: AdditionalAlternateAccountIdentifiers;
});

