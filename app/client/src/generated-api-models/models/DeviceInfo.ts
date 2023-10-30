/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Contains Creditor device info.
 *
 * **Applicable for Direct Debit Payments Only(transferType=DEBIT)**
 *
 * **Refer the table below for the applicable and mandatory markets**
 *
 * | Markets        | Significance |
 * |----------------|--------------|
 * |   Malaysia     | MANDATORY    |
 */
export type DeviceInfo = {
    /**
     * Device IP address
     *
     * **Applicable for Direct Debit Payments Only(transferType=DEBIT)**
     *
     * **Refer the table below for the applicable and mandatory markets**
     *
     * | Markets        | Significance |
     * |----------------|--------------|
     * |   Malaysia     | MANDATORY    |
     */
    ipAddress?: string;
    /**
     * Contains the geographical coordinates.
     *
     * **Applicable for Direct Debit Payments Only(transferType=DEBIT)**
     *
     * **Refer the table below for the applicable and mandatory markets**
     *
     * | Markets        | Significance |
     * |----------------|--------------|
     * |   Malaysia     | MANDATORY    |
     */
    geoCoordinates?: {
        latitude?: string;
        longitude?: string;
    };
};

