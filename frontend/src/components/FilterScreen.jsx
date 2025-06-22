import React, { useState } from "react";
import FilterDropdown from "./FilterDropdown";
import FilteredResults from "./FilteredResults";
import "../css/Result.css";

function FilterScreen() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <>
      <div className="dropdown">
        <FilterDropdown
          selectedValue={selectedValue}
          handleChange={handleChange}
        />
      </div>
      <div className="timeline-result-grid">
        <FilteredResults filterType={selectedValue} />
      </div>
    </>
  );
}

export default FilterScreen;
