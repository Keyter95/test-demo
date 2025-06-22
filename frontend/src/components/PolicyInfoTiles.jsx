import contractDetails from "../data/contract_detail_view.json";

const info = contractDetails;

console.log(info);

function PolicyInfoTiles() {
  return (
    <div className="info-tile" id="policy-info">
      {info.map((item) => (
        <>
          <h3 className="info-heading">Policy Information</h3>
          <table>
            <tbody>
              <tr>
                <td className="theading">Product Label</td>
                <td>{`${item.productLabel}`}</td>
              </tr>
              <tr>
                <td className="theading">Campaign Label</td>
                <td>{`${item.campaignLabel}`}</td>
              </tr>
              <tr>
                <td className="theading">Policy Number</td>
                <td>{`${item.contractNumber}`}</td>
              </tr>
              <tr>
                <td className="theading">Contract Status</td>
                <td>{`${item.contractStatus}`}</td>
              </tr>
              <tr>
                <td className="theading">Commencement Date</td>
                <td>{`${item.commencementDate}`}</td>
              </tr>
              <tr>
                <td className="theading">Maturity Date</td>
                <td>{`${item.maturityDate}`}</td>
              </tr>
            </tbody>
          </table>
        </>
      ))}
    </div>
  );
}

export default PolicyInfoTiles;
