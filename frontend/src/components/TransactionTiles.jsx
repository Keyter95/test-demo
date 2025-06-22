import transactions from "../data/transactions.json";
import "../css/Result.css";

function TransactionTiles() {
  const transData =
    transactions.contracttransactionsview.ttContractTransactionsView.sort(
      (a, b) => {
        return new Date(a.transactionDate) - new Date(b.transactionDate);
      }
    );
  return (
    <>
      {transData.map((item) => (
        <div
          key={item.accountTransactionObj}
          className="transactions-result-tile"
        >
          <h4>{`${item.transactionTypeDescription} : ${item.systemStatusDescription}`}</h4>
          <table>
            <tr>
              <td className="theading">Transaction Status</td>
              <td>{item.transactionStatusTla}</td>
            </tr>
            <tr>
              <td className="theading">Transaction Date</td>
              <td>{item.transactionDate}</td>
            </tr>
            <tr>
              <td className="theading">Transaction Amount</td>
              <td>{item.amount}</td>
            </tr>
          </table>
        </div>
      ))}
    </>
  );
}
export default TransactionTiles;
