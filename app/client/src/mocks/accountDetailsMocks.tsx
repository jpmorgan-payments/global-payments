import { Creditor, Debtor } from 'generated-api-models';

export const USRTPDebtorMockValues: Debtor[] = [
  {
    debtorName: 'RAPID AUDIO LLC',
    debtorAccount: {
      accountId: '000000010900009',
      accountCurrency: 'USD',
    },
  },
  {
    debtorName: 'MORRIS ELECTRIC CONTRACTING LLC',
    debtorAccount: {
      accountId: '000000010962009',
      accountCurrency: 'USD',
    },
  },
  {
    debtorName: 'OFFICE 123 INC',
    debtorAccount: {
      accountId: '000000010975001',
      accountCurrency: 'USD',
    },
  },
];

export const EURTPDebtorMockValues: Debtor[] = [
  {
    debtorName: 'OBGLRTPCL1 Account',
    debtorAccount: {
      accountId: 'DE88501108006231400596',
      accountCurrency: 'EUR',
      accountType: 'IBAN',
    },
  },
  {
    debtorName: 'UNICORNUAT Account',
    debtorAccount: {
      accountId: 'DE45501108000041287103',
      accountCurrency: 'EUR',
      accountType: 'IBAN',
    },
  },
  {
    debtorName: 'ACCT-0017960079601529-TITLE.1',
    debtorAccount: {
      accountId: 'IE90CHAS93090379601529',
      accountCurrency: 'EUR',
      accountType: 'IBAN',
    },
  },
  {
    debtorName: 'ACCT-0017960079607496-TITLE.1',
    debtorAccount: {
      accountId: 'IE98CHAS93090379607496',
      accountCurrency: 'EUR',
      accountType: 'IBAN',
    },
  },
] as Debtor[];

export const USRTPCreditorMockValues: Creditor[] = [
  {
    creditorName: 'RAPID AUDIO LLC',
    creditorAccount: {
      accountId: '000000010900009',
    },
  },
  {
    creditorName: 'MORRIS ELECTRIC CONTRACTING LLC',
    creditorAccount: {
      accountId: '000000010962009',
    },
  },
  {
    creditorName: 'OFFICE 123 INC',
    creditorAccount: {
      accountId: '000000010975001',
    },
  },
];

export const EURTPCreditorMockValues: Creditor[] = [
  {
    creditorName: 'OBGLRTPCL1 Account',
    creditorAccount: {
      accountId: 'DE88501108006231400596',
    },
  },
  {
    creditorName: 'UNICORNUAT Account',
    creditorAccount: {
      accountId: 'DE45501108000041287103',
    },
  },
  {
    creditorName: 'ACCT-0017960079601529-TITLE.1',
    creditorAccount: {
      accountId: 'IE90CHAS93090379601529',
    },
  },
  {
    creditorName: 'ACCT-0017960079607496-TITLE.1',
    creditorAccount: {
      accountId: 'IE98CHAS93090379607496',
      accountType: 'IBAN'
    },
  },
] as Creditor[];