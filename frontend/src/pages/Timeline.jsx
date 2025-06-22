import { transformTimelineData } from "../js/TimelineCondense";
import React, { useState } from "react";
import FilterScreen from "../components/FilterScreen";
import "../css/Result.css";

function Timeline() {
  return (
    <div className="timeline-body">
      <FilterScreen />
    </div>
  );
}

export default Timeline;
