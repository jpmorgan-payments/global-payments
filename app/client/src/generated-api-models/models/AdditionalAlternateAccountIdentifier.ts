/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AlternateAccountIdentifier } from './AlternateAccountIdentifier';

/**
 * A value that can be used as an alternative identifier for an account.
 * - Each `identifier` entry **MUST** identify its context as assigned by the associated acount platform as an idType.
 */
export type AdditionalAlternateAccountIdentifier = {
    /**
     * One or more values that can be used as alternative identifiers for an account.
     * | Identifier Type    | Description                                                    |
     * | -------------------| ---------------------------------------------------------------|
     * | PROGRAM_ID         | A client program identifier. Applicable to **Embedded Finance**|
     * | CUSTOM             | A custom identifier that can be used to identify an account eg. `EMAIL`,`CARD_NUMBER` etc. *Should be used inconjunction with name field.*|
     */
    idType: AdditionalAlternateAccountIdentifier.idType;
    identifier: AlternateAccountIdentifier;
    /**
     * Optional field to provide more context to the alternate account identifier type. With idType: `CUSTOM` it is recommended to provide a name for the identifier, for example:
     * | Identifier Type    | NAME        |
     * | -------------------|-------------|
     * | CUSTOM             |`EMAIL`      |
     * | CUSTOM             |`CARD_NUMBER`|
     */
    name?: string;
};

export namespace AdditionalAlternateAccountIdentifier {

    /**
     * One or more values that can be used as alternative identifiers for an account.
     * | Identifier Type    | Description                                                    |
     * | -------------------| ---------------------------------------------------------------|
     * | PROGRAM_ID         | A client program identifier. Applicable to **Embedded Finance**|
     * | CUSTOM             | A custom identifier that can be used to identify an account eg. `EMAIL`,`CARD_NUMBER` etc. *Should be used inconjunction with name field.*|
     */
    export enum idType {
        PROGRAM_ID = 'PROGRAM_ID',
        CUSTOM = 'CUSTOM',
    }


}

