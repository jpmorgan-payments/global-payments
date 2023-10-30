/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AdditionalInstitution } from './AdditionalInstitution';
import type { DebtorFinancialInstitutionId } from './DebtorFinancialInstitutionId';

export type DebtorAgent = {
    financialInstitutionId: DebtorFinancialInstitutionId;
    /**
     * Only applicable to UK Faster Payments. Instructing agent of the ultimate debtor.
     */
    additionalInstitutions?: Array<AdditionalInstitution>;
};

