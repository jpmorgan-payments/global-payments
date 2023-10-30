/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $AdditionalIdentifier = {
    properties: {
        id: {
            type: 'string',
            isRequired: true,
            maxLength: 128,
        },
        idType: {
            type: 'Enum',
            isRequired: true,
        },
        issuer: {
            type: 'string',
            maxLength: 128,
        },
        schemeName: {
            description: `type of scheme`,
            properties: {
                code: {
                    type: 'Code',
                },
                proprietary: {
                    type: 'Proprietary',
                },
            },
        },
    },
} as const;
