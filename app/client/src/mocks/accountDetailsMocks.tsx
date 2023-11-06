import { Creditor, Debtor } from 'generated-api-models';

export const USRTDebtorMockValues: Debtor[] = [
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
