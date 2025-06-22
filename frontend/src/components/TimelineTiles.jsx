import timeline from "../data/time_line.json";

const timelineData = timeline.Elements.sort((a, b) => {
  return (
    new Date(
      String(JSON.parse(a.Label).EffectiveDate).slice(
        0,
        String(JSON.parse(a.Label).EffectiveDate).indexOf("T")
      )
    ) -
    new Date(
      String(JSON.parse(b.Label).EffectiveDate).slice(
        0,
        String(JSON.parse(b.Label).EffectiveDate).indexOf("T")
      )
    )
  );
});

function TimelineTiles() {
  console.log("getting to timeline");
  return (
    <>
      {timelineData.map((item) => (
        <div
          key={JSON.parse(item.Label).MovementObj}
          className="timeline-result-tile"
        >
          <h4>{item.Description}</h4>
          <table>
            <tr>
              <td className="theading">Type</td>
              <td>{item.TypeLabel}</td>
            </tr>
            <tr>
              <td className="theading">Movement Effective Date</td>
              <td>
                {String(JSON.parse(item.Label).EffectiveDate).slice(
                  0,
                  String(JSON.parse(item.Label).EffectiveDate).indexOf("T")
                )}
              </td>
            </tr>
            <tr>
              <td className="theading">Premium</td>
              <td>{JSON.parse(item.Label).Premium}</td>
            </tr>
          </table>
        </div>
      ))}
    </>
  );
}

export default TimelineTiles;
