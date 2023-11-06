import { Text, SimpleGrid } from '@mantine/core';
import { PageWrapper } from 'components/PageWrapper/PageWrapper';
import { GITHUB_REPO } from 'data/constants';
import { PreviousPaymentPanel } from 'features/GetPreviousPayments/PreviousPaymentPanel';
import { InitiateAPaymentPanel } from 'features/InitiateAPayment/InitiateAPaymentPanel';
import { TransactionManagement } from 'shared.types';

export const InitiateAPaymentPage = ({
  endToEndIds,
  setEndToEndIds,
}: TransactionManagement) => {
  return (
    <PageWrapper
      title="Initiate A Payment"
      apiEndpoint="/payments"
      githubLink={`${GITHUB_REPO}/tree/main/app/client/src/features/Payments`}
    >
      <Text>TODO</Text>
      <SimpleGrid>
        <InitiateAPaymentPanel setEndToEndIds={setEndToEndIds} endToEndIds={endToEndIds}/>
        <PreviousPaymentPanel endToEndIds={endToEndIds} />
      </SimpleGrid>
    </PageWrapper>
  );
};
