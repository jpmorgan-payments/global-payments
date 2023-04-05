import React from "react";
import FormInput from "./components/formInput";
import "./css/App.css";

const sendPaymentClicked = () => {
  console.log("ere");
};
function App() {
  return (
    <main>
      <h1>JP Morgan Global Payments Sample</h1>
      <form
        method="POST"
        id="paymentsForm"
        onSubmit={() => sendPaymentClicked()}
      >
        <label for="paymentType">Payment Type</label>
        <select id="paymentType" name="paymentType" required>
          <option value="RTP" selected>
            RTP
          </option>
        </select>

        <label for="paymentCurrency">Payment Currency</label>
        <select id="paymentCurrency" name="paymentCurrency" required>
          <option value="USD" selected>
            USD
          </option>
        </select>

        <label for="requestedExecutionDate">Requested Execution Date</label>
        <input
          type="date"
          id="requestedExecutionDate"
          name="requestedExecutionDate"
          required
        />

        <fieldset name="paymentsIdentifiers">
          <legend>Payments Identifiers</legend>
          <FormInput
            label="endToEndId"
            text="End to end ID"
            name="paymentsIdentifiers.endToEndId"
            required={true}
          />
        </fieldset>

        <label for="paymentAmount">Payment Amount</label>
        <input type="number" id="paymentAmount" name="paymentAmount" required />

        <label for="transferType">Transfer Type</label>
        <select name="transferType" id="transferType">
          <option value="CREDIT">CREDIT</option>
          <option value="DEBIT">DEBIT</option>
        </select>

        <fieldset name="debtor">
          <legend>Debtor</legend>
          <label for="debtorName">Debtor Name</label>
          <input
            type="text"
            id="debtorName"
            name="debtor.debtorName"
            required
          />

          <fieldset name="debtorAccount">
            <legend>Debtor Account</legend>
            <label for="accountId">Account Id</label>
            <input
              type="text"
              id="accountId"
              name="debtor.debtorAccount.accountId"
              required
            />
            <label for="accountCurrency">Account Currency</label>
            <input
              type="text"
              id="accountCurrency"
              name="debtor.debtorAccount.accountCurrency"
              required
            />
          </fieldset>
        </fieldset>

        <fieldset name="debtorAgent">
          <legend>Debtor Agent</legend>
          <fieldset name="financialInstitutionId">
            <legend>Financial Institution Id</legend>
            <fieldset name="clearingSystemId">
              <legend>Clearing System Id</legend>
              <label for="id">Id</label>
              <input
                type="text"
                id="id"
                name="debtorAgent.financialInstitutionId.clearingSystemId.id"
                required
              />
              <label for="idType">ID Type </label>
              <input
                type="text"
                id="idType"
                name="debtorAgent.financialInstitutionId.clearingSystemId.idType"
                required
              />
            </fieldset>
          </fieldset>
        </fieldset>

        <fieldset name="creditor">
          <legend>Creditor</legend>
          <label for="creditorName">Creditor Name</label>
          <input
            type="text"
            id="creditorName"
            name="creditor.creditorName"
            required
          />

          <fieldset name="creditorAccount">
            <legend>Creditor Account</legend>
            <label for="creditorAccountId">Account Id</label>
            <input
              type="text"
              id="creditorAccountId"
              name="creditor.creditorAccount.accountId"
              required
            />
            <label for="creditorAccountCurrency">Account Currency</label>
            <input
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
              <label for="creditorId">Id</label>
              <input
                type="text"
                id="creditorId"
                name="creditorAgent.financialInstitutionId.clearingSystemId.id"
                required
              />
              <label for="creditorIdType">ID Type </label>
              <input
                type="text"
                id="creditorIdType"
                name="creditorAgent.financialInstitutionId.clearingSystemId.idType"
                required
              />
            </fieldset>
          </fieldset>
        </fieldset>
        <button type="submit">Initiate US RTP Payment</button>
      </form>
    </main>
  );
}

export default App;
