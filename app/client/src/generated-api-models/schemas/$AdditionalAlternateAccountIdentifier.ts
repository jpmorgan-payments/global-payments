/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $AdditionalAlternateAccountIdentifier = {
    description: `A value that can be used as an alternative identifier for an account.
    - Each \`identifier\` entry **MUST** identify its context as assigned by the associated acount platform as an idType. `,
    properties: {
        idType: {
            type: 'Enum',
            isRequired: true,
        },
        identifier: {
            type: 'AlternateAccountIdentifier',
            isRequired: true,
        },
        name: {
            type: 'string',
            description: `Optional field to provide more context to the alternate account identifier type. With idType: \`CUSTOM\` it is recommended to provide a name for the identifier, for example:
            | Identifier Type    | NAME        |
            | -------------------|-------------|
            | CUSTOM             |\`EMAIL\`      |
            | CUSTOM             |\`CARD_NUMBER\`|`,
            maxLength: 32,
        },
    },
} as const;
