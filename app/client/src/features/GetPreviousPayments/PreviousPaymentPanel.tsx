import { useQueries } from '@tanstack/react-query';
import { JsonModal, Panel, TableWithJsonDisplay } from 'components';
import { useState } from 'react';
import { useGetPaymentByEndToEndId } from './hooks/useGetPaymentByEndToEnd';
import { PaymentDetailsResponse } from 'generated-api-models';
import { Button, useMantineTheme } from '@mantine/core';
import { IconEye } from '@tabler/icons';

export const PreviousPaymentPanel = ({
  endToEndIds,
}: {
  endToEndIds: string[];
}) => {
  const theme = useMantineTheme();

  const [jsonModalValue, setJsonModalValue] = useState({});
  const [modalOpen, setModalState] = useState<boolean>(false);
  let rows: JSX.Element[] = [];

  const payments = useQueries({
    queries: endToEndIds.map((id: string) => {
      return {
        queryKey: ['payments', id],
        queryFn: () => useGetPaymentByEndToEndId(id),
      };
    }),
  });

  const handleModalOpen = (rowData: PaymentDetailsResponse) => {
    setJsonModalValue(rowData);
    setModalState(true);
  };

  const checkIfRecentDate = (date: string) => {
    return new Date().getTime() - new Date(date).getTime() < 1 * 60 * 1000;
  };

  const createRow = (rowData: PaymentDetailsResponse) => {
    const isNew =
      rowData.paymentStatus?.createDateTime &&
      checkIfRecentDate(rowData.paymentStatus.createDateTime);
    return (
      <tr
        key={rowData.payments?.paymentIdentifiers.endToEndId}
        style={{ background: isNew ? theme.colors.green[0] : '' }}
      >
        <td>
          <Button
            onClick={() => handleModalOpen(rowData)}
            compact
            variant="default"
          >
            <IconEye size={16} />
          </Button>
        </td>
        <td>{rowData.payments?.paymentIdentifiers.endToEndId}</td>

        <td>{rowData.paymentStatus?.status}</td>
        <td>{rowData.payments?.paymentCurrency}</td>
        <td>{rowData.paymentStatus?.createDateTime}</td>
      </tr>
    );
  };

  const isLoading = payments.some((query) => query.isLoading);
  if (!isLoading) {
    payments.map(({ data }) => {
      data && data.payments && rows.unshift(createRow(data));
    });
  }
  const ths = (
    <tr>
      <th></th>
      <th>End to End ID</th>
      <th>Status</th>
      <th>Currency</th>
      <th>Create Date/Time</th>
    </tr>
  );

  return (
    <Panel
      title="List of Payment Transactions"
      apiCallType="GET"
      apiEndpoint="/payments/"
    >
      <JsonModal
        json={jsonModalValue}
        modalOpen={modalOpen}
        setModalState={setModalState}
        apiEndpoint={`/payments/`}
      />
      <TableWithJsonDisplay ths={ths} rows={rows} />
    </Panel>
  );
};
