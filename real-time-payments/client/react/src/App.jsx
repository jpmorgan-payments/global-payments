import React from "react";
import FormInput from "./components/formInput";
import "./css/App.css";
import { form2json } from "./utils";

function App() {
  const [response, setResponse] = React.useState();
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    const json = form2json(formData);

    //You can pass formData as a fetch body directly:
    fetch("/api/digitalSignature/tsapi/v1/payments", {
      method: form.method,
      body: json,
      headers: myHeaders,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setResponse(data);
      });
  }

  return (
    <main>
      <h1>JP Morgan Global Payments Sample</h1>
      <form method="POST" onSubmit={handleSubmit}>
        <label htmlFor="paymentType">Payment Type</label>
        <select
          id="paymentType"
          name="payments[paymentType]"
          required
          defaultValue="RTP"
        >
          <option value="RTP">RTP</option>
        </select>

        <label htmlFor="paymentCurrency">Payment Currency</label>
        <select
          id="paymentCurrency"
          name="payments[paymentCurrency]"
          required
          defaultValue="USD"
        >
          <option value="USD">USD</option>
        </select>

        <FormInput
          type="date"
          text="Requested Execution Date"
          id="requestedExecutionDate"
          name="payments[requestedExecutionDate]"
          required
        />

        <fieldset name="paymentsIdentifiers">
          <legend>Payments Identifiers</legend>
          <FormInput
            label="endToEndId"
            text="End to end ID"
            name="payments[paymentIdentifiers][endToEndId]"
            required={true}
          />
        </fieldset>

        <FormInput
          label="paymentAmount"
          text="Payment Amount"
          name="payments[paymentAmount]"
          required={true}
          type="number"
        />

        <label htmlFor="transferType">Transfer Type</label>
        <select name="payments[transferType]" id="transferType">
          <option value="CREDIT">CREDIT</option>
          <option value="DEBIT">DEBIT</option>
        </select>

        <fieldset name="debtor">
          <legend>Debtor</legend>
          <FormInput
            label="debtorName"
            text="Debtor Name"
            name="payments[debtor][debtorName]"
            required={true}
          />

          <fieldset name="debtorAccount">
            <legend>Debtor Account</legend>
            <FormInput
              label="accountId"
              text="Account Id"
              name="payments[debtor][debtorAccount][accountId]"
              required={true}
            />
            <FormInput
              label="accountCurrency"
              text="Account Currency"
              name="payments[debtor][debtorAccount][accountCurrency]"
              required={true}
            />
          </fieldset>
        </fieldset>

        <fieldset name="debtorAgent">
          <legend>Debtor Agent</legend>
          <fieldset name="financialInstitutionId">
            <legend>Financial Institution Id</legend>
            <fieldset name="clearingSystemId">
              <legend>Clearing System Id</legend>
              <FormInput
                label="id"
                text="Id"
                name="payments[debtorAgent][financialInstitutionId][clearingSystemId][id]"
                required={true}
              />
              <FormInput
                label="idType"
                text="ID Type"
                name="payments[debtorAgent][financialInstitutionId][clearingSystemId][idType]"
                required={true}
              />
            </fieldset>
          </fieldset>
        </fieldset>

        <fieldset name="creditor">
          <legend>Creditor</legend>
          <FormInput
            text="Creditor Name"
            label="creditorName"
            name="payments[creditor][creditorName]"
            required
          />

          <fieldset name="creditorAccount">
            <legend>Creditor Account</legend>
            <FormInput
              text="Account Id"
              id="creditorAccountId"
              name="payments[creditor][creditorAccount][accountId]"
              required
            />
            <FormInput
              text="Account Currency"
              type="text"
              id="creditorAccountCurrency"
              name="payments[creditor][creditorAccount][accountCurrency]"
              required
            />
          </fieldset>
        </fieldset>

        <fieldset name="creditorAgent">
          <legend>Creditor Agent</legend>
          <fieldset name="creditorFinancialInstitutionId">
            <legend>Financial Institution Id</legend>
            <fieldset name="creditorClearingSystemId">
              <legend>Clearing System Id</legend>
              <FormInput
                text="Id"
                id="creditorId"
                name="payments[creditorAgent][financialInstitutionId][clearingSystemId][id]"
                required
              />
              <FormInput
                text="ID Type"
                id="creditorIdType"
                name="payments[creditorAgent][financialInstitutionId][clearingSystemId][idType]"
                required
              />
            </fieldset>
          </fieldset>
        </fieldset>
        <button type="submit">Initiate US RTP Payments</button>
      </form>
      {response && (
        <div>
          <h2>API Response:</h2>

          <pre
            id="json"
            className="border-2 border-dashed border-gray-200 w-full m-2 p-2 overflow-x-auto mb-10"
          >
            {JSON.stringify(response, undefined, 2)}
          </pre>
        </div>
      )}
    </main>
  );
}

export default App;
