import { useParams } from "react-router-dom";
import { transformTimelineData } from "../js/TimelineCondense";
import "../css/Result.css";
import { Link } from "react-router-dom";

function TimelineByYear() {
  const { year } = useParams();
  const data = transformTimelineData();
  const filtered = data.filter((item) => String(item.year) === year);

  return (
    <>
      <div className="back-btn">
        <h3>
          <Link to="/timeline">Back</Link>
        </h3>
      </div>
      <div className="by-year-result-grid">
        {filtered.map((item, index) => (
          <div
            key={item.obj}
            className={`${String(item.process).toLowerCase()}-result-tile`}
          >
            <h4>{item.description}</h4>
            <table>
              <tbody>
                <tr>
                  <td className="theading">Movement Type</td>
                  <td>{item.process}</td>
                </tr>
                <tr>
                  <td className="theading">Date</td>
                  <td>{item.completed}</td>
                </tr>
                <tr>
                  <td className="theading">Status</td>
                  <td>{item.status}</td>
                </tr>
                <tr>
                  <td className="theading">Amount</td>
                  <td>{item.amount}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </>
  );
}

export default TimelineByYear;
