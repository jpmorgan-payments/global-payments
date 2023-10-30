/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AdditionalInstitution } from './AdditionalInstitution';
import type { CreditorFinancialInstitutionId } from './CreditorFinancialInstitutionId';

/**
 * - Not applicable for Push To Card, Push To Wallet and Interac
 * - Mandatory for pay by account and optional for pay by proxy.
 * - Mandatory for Mexico RTP if the creditor is a bank
 *
 * ***NOTE: Creditor Agent is MANDATORY for RTP Direct Debit payments for all markets.***
 */
export type CreditorAgent = {
    financialInstitutionId: CreditorFinancialInstitutionId;
    /**
     * - Only applicable to UK Faster Payments. Instructing agent of the ultimate debtor.
     */
    additionalInstitutions?: Array<AdditionalInstitution>;
};

