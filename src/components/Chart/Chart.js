import React from "react";
import "./Chart.css";

import ChartBar from "./ChartBar";

const Chart = (props) => {
  const totalMaximum = Math.max(
    ...props.dataPoints.map((dataPoint) => dataPoint.value)
  );

  return (
    <div className="chart">
      {props.dataPoints.map((point) => (
        <ChartBar
          key={point.label}
          value={point.value}
          maxValue={totalMaximum}
          label={point.label}
        ></ChartBar>
      ))}
    </div>
  );
};

export default Chart;
