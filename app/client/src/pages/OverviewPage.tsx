import { Anchor, Text, Title } from '@mantine/core';
import { PageWrapper } from 'components';
import { GITHUB_REPO, GLOBAL_PAYMENTS_DOC_HOME } from 'data/constants';

export const OverviewPage = () => {
  return (
    <PageWrapper title="Global Payments Showcase">
      <Text>
        The Global Payments API is a unified API solution for multiple payment
        types across global markets.
      </Text>

      <Text>
        You can also take a closer look at this application's code on the{' '}
        <Anchor href={GITHUB_REPO} target="_blank" color="blue">
          GitHub repository
        </Anchor>
        .
      </Text>
      <Text>
        You can get started now by visiting our{' '}
        <Anchor href={'/payments'} color="blue">
          Initiate a payment
        </Anchor>{' '}
        section. This mimics how we could use the API to create a payment.
      </Text>
      <Title order={2} mt="xs">
        Authentication
      </Title>
      <Text>
        In this sample app, your requests are not sent to the live Global
        Payments APIs. In a live environment, a token is required in the header
        of your requests and the payload should be encrypted.
      </Text>
      <Title order={2} mt="xs">
        Learn more
      </Title>
      <div>
        <Text>
          Learn more about Online Payments at:{' '}
          <Anchor href={GLOBAL_PAYMENTS_DOC_HOME} target="_blank" color="blue">
            {GLOBAL_PAYMENTS_DOC_HOME}
          </Anchor>
        </Text>
      </div>
    </PageWrapper>
  );
};
