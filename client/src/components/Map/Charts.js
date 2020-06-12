import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import TimeSelector from "./TimeSelector";

import moment from "moment";

export default function Charts(props) {
  const [tab, setTab] = useState(0);

  const tabNames = [
    {
      name: "Speed",
      data: {
        labels: props.data.map((point, index) =>
          moment(point.reading_date).format("MMM/DD hh:mm")
        ),
        datasets: [
          {
            label: "Speed (mph)",
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgb(108,108,103)",
            borderColor: "rgb(248,245,240)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgb(108,108,103)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgb(108,108,103)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: props.data.map(
              (point, index) => (Math.round(point.speed * 0.621371) * 100) / 100
            ),
          },
        ],
      },
    },
    {
      name: "Altitude",
      data: {
        labels: props.data.map((point, index) =>
          moment(point.reading_date).format("MMM/DD hh:mm")
        ),
        datasets: [
          {
            label: "Altitude (m)",
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgb(108,108,103)",
            borderColor: "rgb(248,245,240)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgb(108,108,103)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgb(108,108,103)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: props.data.map((point, index) => point.altitude),
          },
        ],
      },
    },
  ];
  let currentChart = tabNames[tab];
  return (
    <div className="card-body">
      <div>
        <div className="row">
          <div className="col-md-6 flex align-items-center">
            <ul className="pagination">
              {tabNames.map((name, index) => (
                <li
                  className={`page-item ${index === tab ? "active" : ""}`}
                  onClick={() => setTab(index)}
                >
                  <a className={"page-link"} href="#">
                    {name.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-6">
            <TimeSelector timeframe={props.timeFrame} setTimeFrame={props.setTimeFrame} />
          </div>
        </div>
        <div
          style={{
            backgroundColor: "rgba(91,231,254,.4)",
            color: "white",
          }}
        >
          <Line
            onElementsClick={(elems) => {
              props.handleMarker(elems[0]._index);
            }}
            data={currentChart.data}
            height={250}
          />
        </div>
      </div>
    </div>
  );
}
