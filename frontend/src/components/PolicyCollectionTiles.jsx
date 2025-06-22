import collectionInfo from "../data/contract_detail_view.json";

const info = collectionInfo;
function PolicyCollectionTiles() {
  return (
    <div className="info-tile" id="policy-collection">
      {info.map((item) => (
        <>
          <h3 className="info-heading">Policy Collection</h3>
          <table>
            <tbody>
              <tr>
                <td className="theading">Collection Frequency</td>

                <td>{`${item.collectionFrequency}`}</td>
              </tr>
              <tr>
                <td className="theading">Collection Method </td>
                <td>{`${item.collectionMethod}`}</td>
              </tr>
              <tr>
                <td className="theading">Payment Amount</td>
                <td>{`${String(item.pipelinePayments).replace("-", "")}`}</td>
              </tr>
            </tbody>
          </table>
        </>
      ))}
    </div>
  );
}

export default PolicyCollectionTiles;
