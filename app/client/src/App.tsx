import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { Layout } from 'components';
import { NotFoundErrorPage, OverviewPage, InitiateAPaymentPage } from 'pages';

import { themes } from 'themes';
import { previousPaymentMock } from 'mocks/previousPaymentMock';
import { PaymentDetailsResponse } from 'generated-api-models';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false },
  },
});

const App = () => {
  const [themeName, setThemeName] = useState<string>(Object.keys(themes)[0]);
  const previousPaymentsMock: PaymentDetailsResponse[] = previousPaymentMock;
  const initialEndToEndIds = previousPaymentsMock.map((payment) =>
    payment.payments ? payment.payments.paymentIdentifiers.endToEndId : '',
  );

  const [endToEndIds, setEndToEndIds] = useState<string[]>(initialEndToEndIds);

  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider
        theme={themes[themeName]}
        withGlobalStyles
        withNormalizeCSS
      >
        <ModalsProvider>
          <BrowserRouter>
            <Layout
              themeProps={{
                currentThemeName: themeName,
                themeNames: Object.keys(themes),
                setThemeName: setThemeName,
              }}
            >
              <Routes>
                <Route path="*" element={<NotFoundErrorPage />} />
                <Route path="overview" element={<OverviewPage />} />
                <Route
                  path="payments"
                  element={
                    <InitiateAPaymentPage
                    endToEndIds={endToEndIds}
                    setEndToEndIds={setEndToEndIds}
                    />
                  }
                />
                <Route path="/" element={<OverviewPage />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </ModalsProvider>
      </MantineProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
