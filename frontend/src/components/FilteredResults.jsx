import WorkflowTiles from "./WorkflowTiles";
import TransactionTiles from "./TransactionTiles";
import ClaimTiles from "./ClaimTiles";
import MovementTiles from "./MovementTiles";
import TimelineTiles from "./TimelineTiles";
import StatusTiles from "./StatusTiles";
import DateTiles from "./DateTiles";

function FilteredResults({ filterType }) {
  console.log("Rendering FilteredResults with:", filterType);
  if (filterType === "workflows") {
    return <WorkflowTiles />;
  } else if (filterType === "transactions") {
    return <TransactionTiles />;
  } else if (filterType === "claims") {
    return <ClaimTiles />;
  } else if (filterType === "movements") {
    return <MovementTiles />;
  } else if (filterType === "timeline") {
    return <TimelineTiles />;
  } else if (filterType === "status") {
    return <StatusTiles />;
  } else {
    return <DateTiles />;
  }
}

export default FilteredResults;
