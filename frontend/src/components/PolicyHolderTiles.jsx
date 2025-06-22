import PolicyHolderData from "../data/roles.json";

const ContractRoles = PolicyHolderData.contractrolesview.ttContractRolesView;

function PolicyHolderTiles() {
  // Find the first main member
  const mainMember = ContractRoles.find((item) => item.mainPlayerInRole);
  return (
    <div className="info-tile" id="policy-holder">
      {mainMember && (
        <>
          <h3 className="info-heading">Policy Holder</h3>
          <table>
            <tbody>
              <tr>
                <td className="theading">Full Name</td>
                <td>{mainMember.entityName}</td>
              </tr>
              <tr>
                <td className="theading">ID Number</td>
                <td>{mainMember.idNumber}</td>
              </tr>
              <tr>
                <td className="theading">Date of Birth</td>
                <td>{mainMember.dateOfBirth}</td>
              </tr>
              <tr>
                <td className="theading">Status of Policy</td>
                <td>
                  {mainMember.ttStatusDetails?.[0]?.statusCode ||
                    " - No Status"}
                </td>
              </tr>
              <tr>
                <td className="theading">Commencement Date</td>
                <td>{mainMember.effectiveFromDate}</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}
export default PolicyHolderTiles;
