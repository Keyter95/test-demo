import productComp from "../data/components.json";
import "../css/Policies.css";
const data = productComp.contractcomponentview.ttContractComponentView;

function ProductComponentTiles() {
  return (
    <>
      {data.map((item, index) => (
        <div className="product-tile">
          <h3>
            {String(item.component_label).slice(
              0,
              String(item.component_label).indexOf(")") + 1
            )}
          </h3>
          <table>
            <tr>
              <td className="theading">Component Start Date</td>
              <td className="tvalue">{item.contract_component_start_date}</td>
            </tr>
            <tr>
              <td className="theading">Single Payment Amount </td>
              <td className="tvalue">{`R${item.single_payment_amount}`}</td>
            </tr>
            <tr>
              <td className="theading">Component Premium</td>
              <td className="tvalue">{`R${item.contract_component_premium}`}</td>
            </tr>
          </table>
        </div>
      ))}
    </>
  );
}

export default ProductComponentTiles;
