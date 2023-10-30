import { Panel } from 'components';
import { useMemo } from 'react';

export const InitiateAPaymentPanel = () => {
  return (
    <Panel
      title="Initiate a Payment"
      apiCallType="POST"
      apiEndpoint="/payments"
    ></Panel>
  );
};
