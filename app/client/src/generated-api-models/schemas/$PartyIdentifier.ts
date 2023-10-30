/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PartyIdentifier = {
    type: 'one-of',
    contains: [{
        properties: {
            organizationId: {
                type: 'OrganizationID',
                isRequired: true,
            },
        },
    }, {
        properties: {
            individualId: {
                type: 'IndividualID',
                isRequired: true,
            },
        },
    }],
} as const;
