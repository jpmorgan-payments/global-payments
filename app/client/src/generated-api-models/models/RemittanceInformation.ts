/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FxApplied } from './FxApplied';
import type { StructuredInformation } from './StructuredInformation';

/**
 * Mandatory for Malaysia Faster Payments, optional for other markets
 */
export type RemittanceInformation = {
    /**
     * Maximum number of lines and characters supported per
     * market/instrument :-
     *
     * UK FPS      - 1 line, 140 characters
     * Singapore RTP     - 1 line, 140 characters
     * Australia RTP     - 2 lines, 140 characters
     * Hong Kong RTP     - 1 line, 140 characters
     * Malaysia RTP     - 1 line, 140 characters
     * SEPA Instant - 1 line, 140 characters
     * India IMPS    - 1 line, 140 characters
     * Brazil RTP     - 1 line, 140 characters
     * Mexico RTP    - 210 characters
     * Indonesia RTP - 1 line, 140 characters
     * US RTP - 1 line, 140 charaters
     * Push To Card US &amp; Canada - 1 line, 16 characters (Numbers, alphabets, SPACE and special chars  -./,$@&amp; allowed)
     * Blockchain (Coin) Payments - 1 line, 140 characters
     */
    unstructuredInformation?: Array<string>;
    /**
     * Applicable Faster Payment Markets -
     * Malaysia
     * US
     */
    structuredInformation?: Array<StructuredInformation>;
    /**
     * Only applicable for Mexico Faster Payments
     */
    foreignCurrency?: string;
    fx?: FxApplied;
};

