import React from "react";
import FormInput from "./components/formInput";
import "./css/App.css";

function App() {
  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    var formObject = {};
    console.log(formData);
    formData.forEach((value, key) => {
      if(key.includes('.')){
        key.split('.').forEach(keySection => {
          
        })
      }
      console.log(value);
      console.log(key);
      formObject[key] = value;
    });
    console.log(JSON.parse(JSON.stringify(formObject)));

    const paymentsObjects = {
      payments: formObject,
    };

    // You can pass formData as a fetch body directly:
    fetch("/api/digitalSignature/tsapi/v1/payments", {
      method: form.method,
      body: JSON.stringify(paymentsObjects),
    });
  }

  return (
    <main>
      <h1>JP Morgan Global Payments Sample</h1>
      <form method="POST" id="paymentsForm" onSubmit={handleSubmit}>
        <label htmlFor="paymentType">Payment Type</label>
        <select id="paymentType" name="paymentType" required defaultValue="RTP">
          <option value="RTP">RTP</option>
        </select>

        <label htmlFor="paymentCurrency">Payment Currency</label>
        <select
          id="paymentCurrency"
          name="paymentCurrency"
          required
          defaultValue="USD"
        >
          <option value="USD">USD</option>
        </select>

        <FormInput
          type="date"
          text="Requested Execution Date"
          id="requestedExecutionDate"
          name="requestedExecutionDate"
          required
        />

        <fieldset name="paymentsIdentifiers">
          <legend>Payments Identifiers</legend>
          <FormInput
            label="endToEndId"
            text="End to end ID"
            name="paymentsIdentifiers[endToEndId]"
            required={true}
          />
        </fieldset>

        <FormInput
          label="paymentAmount"
          text="Payment Amount"
          name="paymentAmount"
          required={true}
          type="number"
        />

        <label htmlFor="transferType">Transfer Type</label>
        <select name="transferType" id="transferType">
          <option value="CREDIT">CREDIT</option>
          <option value="DEBIT">DEBIT</option>
        </select>

        <fieldset name="debtor">
          <legend>Debtor</legend>
          <FormInput
            label="debtorName"
            text="Debtor Name"
            name="debtor.debtorName"
            required={true}
          />

          <fieldset name="debtorAccount">
            <legend>Debtor Account</legend>
            <FormInput
              label="accountId"
              text="Account Id"
              name="debtor.debtorAccount.accountId"
              required={true}
            />
            <FormInput
              label="accountCurrency"
              text="Account Currency"
              name="debtor.debtorAccount.accountCurrency"
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
                name="debtorAgent.financialInstitutionId.clearingSystemId.id"
                required={true}
              />
              <FormInput
                label="idType"
                text="ID Type"
                name="debtorAgent.financialInstitutionId.clearingSystemId.idType"
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
            name="creditor.creditorName"
            required
          />

          <fieldset name="creditorAccount">
            <legend>Creditor Account</legend>
            <FormInput
              text="Account Id"
              id="creditorAccountId"
              name="creditor.creditorAccount.accountId"
              required
            />
            <FormInput
              text="Account Currency"
              type="text"
              id="creditorAccountCurrency"
              name="creditor.creditorAccount.accountCurrency"
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
                name="creditorAgent.financialInstitutionId.clearingSystemId.id"
                required
              />
              <FormInput
                text="ID Type"
                id="creditorIdType"
                name="creditorAgent.financialInstitutionId.clearingSystemId.idType"
                required
              />
            </fieldset>
          </fieldset>
        </fieldset>
        <button type="submit">Initiate US RTP Payments</button>
      </form>
    </main>
  );
}

export default App;
