import workflows from "../data/workflows.json";

function WorkflowTiles() {
  const wfData = workflows.entityworkflowsview.ttEntityWorkflowsView.sort(
    (a, b) => {
      return (
        new Date(
          String(a.completedDateTime).slice(
            0,
            String(a.completedDateTime).indexOf("T")
          )
        ) -
        new Date(
          String(b.completedDateTime).slice(
            0,
            String(b.completedDateTime).indexOf("T")
          )
        )
      );
    }
  );
  return (
    <>
      {wfData.map((item) => (
        <div key={item.processLogObj} className="workflows-result-tile">
          <h4>{item.processLabel}</h4>
          <table>
            <tr>
              <td className="theading">Process Log Reference</td>
              <td>{item.processLogReference}</td>
            </tr>
            <tr>
              <td className="theading">Process Label</td>
              <td>{item.processLabel}</td>
            </tr>
            <tr>
              <td className="theading">Process Status</td>
              <td>{item.statusLabel}</td>
            </tr>
            <tr>
              <td className="theading">Completed Date</td>
              <td>
                {String(item.completedDateTime).slice(
                  0,
                  String(item.completedDateTime).indexOf("T")
                )}
              </td>
            </tr>
          </table>
        </div>
      ))}
    </>
  );
}

export default WorkflowTiles;
