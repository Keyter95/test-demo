import status from "../data/status_history.json";
function StatusTiles() {
  const statusData =
    status.entitystatushistoryview.ttEntityStatusHistoryView.sort((a, b) => {
      return new Date(a.effectiveDate) - new Date(b.effectiveDate);
    });
  return (
    <>
      {statusData.map((item) => (
        <div key={item.statusHistoryObj} className="status-result-tile">
          <h4>{item.statusNotes}</h4>
          <table>
            <tr>
              <td className="theading">Status Change Desciption</td>
              <td>{item.statusDescription}</td>
            </tr>
            <tr>
              <td className="theading">Status Change Date</td>
              <td>{item.changedDate}</td>
            </tr>
            <tr>
              <td className="theading">Status Change Effective Date</td>
              <td>{item.effectiveDate}</td>
            </tr>
            <tr>
              <td className="theading">User Responsible for Status Change</td>
              <td>{item.username}</td>
            </tr>
          </table>
        </div>
      ))}
    </>
  );
}
export default StatusTiles;
