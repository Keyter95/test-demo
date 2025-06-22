import "../css/Upfront.css";
import { useState } from "react";
import PolicyHolderTiles from "./PolicyHolderTiles";
import PolicyInfoTiles from "./PolicyInfoTiles";
import PolicyCollectionTiles from "./PolicyCollectionTiles";
import ContactInformationTile from "./ContactInformationTile";

function UpfrontInfo() {
  return (
    <>
      <div className="row">
        <PolicyHolderTiles />
        <PolicyInfoTiles />
      </div>
      <div className="row">
        <ContactInformationTile />
        <PolicyCollectionTiles />
      </div>
    </>
  );
}

export default UpfrontInfo;
