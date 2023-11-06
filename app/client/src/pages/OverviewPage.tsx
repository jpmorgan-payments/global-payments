import { Anchor, List, Text, Title } from '@mantine/core';
import { PageWrapper } from 'components';
import { GITHUB_REPO, ONLINE_PAYMENTS_DOC_HOME } from 'data/constants';

export const OverviewPage = () => {
  return (
    <PageWrapper title="Global Payments Showcase">
      <Text>
        The Global Payments API allows you to accept web payments across a variety of regions and countries. 
      </Text>
      <div>
        <Text>
          This showcase application demonstrates the main use cases for each
          endpoint of the Global Payments API.
        </Text>
        <Text>
          Explore this app to get a general sense of the experiences you can
          create, alongside mocked API requests and responses. You can:
        </Text>
      </div>
      <Text>
        You can also take a closer look at this application's code on the{' '}
        <Anchor href={GITHUB_REPO} target="_blank" color="blue">
          GitHub repository
        </Anchor>
        .
      </Text>
      <Text>
        You can get started now by visiting our {' '}
        <Anchor href={'/onlineGoodsServices'} color="blue">
        online goods and services
        </Anchor>
        {' '}section. This mimics how we could use the Online Payments API to make a payment from a website.
      </Text>
      <Title order={2} mt="xs">
        Authentication
      </Title>
      <Text>
        In this sample app, your requests are not sent to the live Online Payments APIs. In a live environment, a token is required in the header
        of your requests.
      </Text>
      <Title order={2} mt="xs">
        Learn more
      </Title>
      <div>
        <Text>
          Learn more about Online Payments at:{' '}
          <Anchor
            href={ONLINE_PAYMENTS_DOC_HOME}
            target="_blank"
            color="blue"
          >
            {ONLINE_PAYMENTS_DOC_HOME}
          </Anchor>
        </Text>
      </div>
    </PageWrapper>
  );
};
