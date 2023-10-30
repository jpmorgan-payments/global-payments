/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $DebtorAgent = {
    properties: {
        financialInstitutionId: {
            type: 'DebtorFinancialInstitutionId',
            isRequired: true,
        },
        additionalInstitutions: {
            type: 'array',
            contains: {
                type: 'AdditionalInstitution',
            },
        },
    },
} as const;
