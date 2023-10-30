/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Code } from './Code';
import type { Proprietary } from './Proprietary';

export type AdditionalIdentifier = {
    id: string;
    idType: AdditionalIdentifier.idType;
    issuer?: string;
    /**
     * type of scheme
     */
    schemeName?: {
        code?: Code;
        proprietary?: Proprietary;
    };
};

export namespace AdditionalIdentifier {

    export enum idType {
        ORGANIZATION = 'ORGANIZATION',
        INDIVIDUAL = 'INDIVIDUAL',
    }


}

