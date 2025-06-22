import claims from "../data/claims.json";

const claimData = claims.entityincidentsview.ttEntityIncidentsView.sort(
  (a, b) => {
    return new Date(a.claimDate) - new Date(b.claimDate);
  }
);

function ClaimTiles() {
  return (
    <>
      {claimData.map((item) => (
        <div key={item.incidentObj} className="claims-result-tile">
          <h4>{item.claimReference}</h4>
          <table>
            <tr>
              <td classNme="theading">Claim Type</td>
              <td>{item.claimType}</td>
            </tr>
            <tr>
              <td classNme="theading">Covered Party Name</td>
              <td>{item.coveredPartyName}</td>
            </tr>
            <tr>
              <td classNme="theading">Claim Date</td>
              <td>{item.claimDate}</td>
            </tr>
            <tr>
              <td classNme="theading">Claim Status</td>
              <td>{item.claimStatus}</td>
            </tr>
            <tr>
              <td classNme="theading">Settlement Amount</td>
              <td>{`R${String(item.settlementAmount).replace("-", "")}`}</td>
            </tr>
            <tr>
              <td classNme="theading">Incident Cause</td>
              <td>{item.incidentCause || "Cause not known"}</td>
            </tr>
          </table>
        </div>
      ))}
    </>
  );
}

export default ClaimTiles;
