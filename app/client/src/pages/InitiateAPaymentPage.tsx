import { Text, SimpleGrid } from '@mantine/core';
import { PageWrapper } from 'components/PageWrapper/PageWrapper';
import { GITHUB_REPO } from 'data/constants';
import { TransactionManagement } from 'shared.types';

export const InitiateAPaymentPage = (props: TransactionManagement) => {
  return (
    <PageWrapper
      title="Initiate A Payment"
      apiEndpoint="/payments"
      githubLink={`${GITHUB_REPO}/tree/main/app/client/src/features/Payments`}
    >
      <Text>TODO</Text>
      <SimpleGrid></SimpleGrid>
    </PageWrapper>
  );
};
