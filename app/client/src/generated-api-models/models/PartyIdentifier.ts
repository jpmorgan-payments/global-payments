/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IndividualID } from './IndividualID';
import type { OrganizationID } from './OrganizationID';

export type PartyIdentifier = ({
    organizationId: OrganizationID;
} | {
    individualId: IndividualID;
});

