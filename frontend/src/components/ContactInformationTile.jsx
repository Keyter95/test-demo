import ContactInformation from "../data/roles.json";

const info = ContactInformation.contractrolesview.ttContractRolesView;
function ContactInformationTile() {
  // Find the first main member
  const mainMember = info.find((item) => item.mainPlayerInRole);
  return (
    <div className="info-tile" id="contact-information">
      {mainMember && (
        <>
          <h3 className="info-heading">Contact Information</h3>
          <table>
            <tbody>
              <tr>
                <td className="theading">Cellphone Number</td>
                <td>{mainMember.cellphone || " - No Detail"}</td>
              </tr>
              <tr>
                <td className="theading">Email Address</td>
                <td>{mainMember.email || " - No Detail"}</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}
export default ContactInformationTile;
