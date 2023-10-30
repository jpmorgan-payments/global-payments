/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Alternate Account Identifier eg. email, program id, card number or other types of identifiers, used as a different means of identifying an account.
 *
 * *Mandatory for the following payment types*:
 * | Payment Type         | description                                                                 |
 * |----------------------|-----------------------------------------------------------------------------|
 * | **Push To Card**     | Use program id while specifying the debtor details.                         |
 * |                      | Use card number while specifying the creditor details.                      |
 * | **Embedded Finance** | Use embedded finance originating account Id while specifying debtor details.|
 */
export type AlternateAccountIdentifier = string;
