import movements from "../data/movement_values.json";

const movementData = movements.movementvaluesview.ttMovementValueView.sort(
  (a, b) => {
    return (
      new Date(a.movementEffectiveDate) - new Date(b.movementEffectiveDate)
    );
  }
);

function MovementTiles() {
  return (
    <>
      {movementData.map((item) => (
        <div key={item.movementValueObj} className="movements-result-tile">
          <h4>{item.movementDescription}</h4>
          <table>
            <tr>
              <td className="theading">Transaction Type</td>
              <td>{item.transactionTypeDescription}</td>
            </tr>
            <tr>
              <td className="theading">Movement Effective Date</td>
              <td>{item.movementEffectiveDate}</td>
            </tr>
            <tr>
              <td className="theading">Account Type</td>
              <td>{item.accountTypeDescription}</td>
            </tr>
            <tr>
              <td className="theading">Transaction Amount</td>
              <td>{`R${item.amount}`}</td>
            </tr>
          </table>
        </div>
      ))}
    </>
  );
}

export default MovementTiles;
