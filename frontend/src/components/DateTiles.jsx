import { transformTimelineData } from "../js/TimelineCondense";
import { Link } from "react-router-dom";
import "../css/Result.css";

function DateTiles() {
  const data = transformTimelineData();
  const years = [...new Set(data.map((item) => item.year))].sort(
    (a, b) => a - b
  );
  return (
    <>
      {years.map((item) => (
        <div key={item} className="year-tile">
          <h2>
            <Link to={`/timeline/${item}`}>{item}</Link>
          </h2>
        </div>
      ))}
    </>
  );
}
export default DateTiles;
