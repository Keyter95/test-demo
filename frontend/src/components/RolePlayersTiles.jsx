import info from "../data/roles.json";
import "../css/Roleplayers.css";

const data = info.contractrolesview.ttContractRolesView;

function RolePlayersTiles() {
  return (
    <>
      {data.map((item) => (
        <div className="role-tile">
          <h3>{item.ttRoleDetails?.[0]?.roleDescription || ""}</h3>
          <table>
            <tr>
              <td className="theading">Fullname</td>
              <td>{item.entityName}</td>
            </tr>
            <tr>
              <td className="theading">Cellphone Number</td>
              <td>{item.cellphone || ""}</td>
            </tr>
            <tr>
              <td className="theading">Policy Effective From Date</td>
              <td>{item.effectiveFromDate}</td>
            </tr>
            <tr>
              <td className="theading">ID Number</td>
              <td>{item.idNumber}</td>
            </tr>
            <tr>
              <td className="theading">Date of Birth</td>
              <td>{item.dateOfBirth}</td>
            </tr>
            <tr>
              <td className="theading">Policy Status</td>
              <td>{item.ttStatusDetails?.[0]?.statusCode}</td>
            </tr>
          </table>
        </div>
      ))}
    </>
  );
}

export default RolePlayersTiles;
