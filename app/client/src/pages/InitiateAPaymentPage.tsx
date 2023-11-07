import { Text, SimpleGrid, Anchor } from '@mantine/core';
import { PageWrapper } from 'components/PageWrapper/PageWrapper';
import { GITHUB_REPO, GLOBAL_PAYMENTS_DOC_HOME } from 'data/constants';
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
      <Text>
        Within this page you can Initiate a Payment using the Global Payments
        API. You can check out further documentation on this API{' '}
        <Anchor href={GLOBAL_PAYMENTS_DOC_HOME} target="_blank">
          here.
        </Anchor>
      </Text>
      <SimpleGrid>
        <InitiateAPaymentPanel
          setEndToEndIds={setEndToEndIds}
          endToEndIds={endToEndIds}
        />
        <PreviousPaymentPanel endToEndIds={endToEndIds} />
      </SimpleGrid>
    </PageWrapper>
  );
};
