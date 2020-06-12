import React from "react";
import moment from "moment";
import Charts from "./Charts";

const _deg2rad = (deg) => {
  return deg * (Math.PI / 180);
};

let haversineFormula = (coordsArray) => {
  let totalDistanceInKm = 0;
  for (let i = 0; i < coordsArray.length - 1; i++) {
    let lat1 = parseFloat(coordsArray[i][1]);
    let lon1 = parseFloat(coordsArray[i][0]);
    let lat2 = parseFloat(coordsArray[i + 1][1]);
    let lon2 = parseFloat(coordsArray[i + 1][0]);
    var R = 6371; // Radius of the earth in km
    var dLat = _deg2rad(lat2 - lat1); // deg2rad below
    var dLon = _deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(_deg2rad(lat1)) *
        Math.cos(_deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km

    totalDistanceInKm = totalDistanceInKm + d;
  }
  let totalDistanceInMiles = totalDistanceInKm / 1.609; //convert to miles
  return totalDistanceInMiles;
};

export default function Stats({ data, isLive, handleMarker, timeFrame,setTimeFrame }) {
  if (data.length == 0) {
    return <div>Sorry, no data available :)</div>;
  } else {
    let average_speed_mph =
      (data.reduce((a, b) => a + b.speed, 0) / data.length) * 0.621371;

    let total_distance = haversineFormula(
      data.map((element) => [element.latitude, element.longitude])
    );
    total_distance = Math.round(total_distance * 100) / 100;
    let start = moment(data[0].reading_date).format("MMM DD, YYYY");
    let end =
      data.length > 1
        ? moment([data.length - 1].reading_date).format("MMM DD, YYYY")
        : moment().format("MMM DD, YYYY");

    return (
      <div
        className={`Stats-container card text-white bg-${
          isLive ? "success" : "secondary"
        } mb-3`}
      >
        <div className="card-header">
          {isLive
            ? "James is currently tracking!"
            : "James is not currently tracking"}
        </div>

        <Charts
          data={data}
          handleMarker={handleMarker}
          timeframe={timeFrame}
          setTimeFrame={setTimeFrame}
        />

        <div className="card-body text-black-50">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              Total Distance: {total_distance} miles
            </li>
            <li class="list-group-item">
              Avg. Speed: {Math.round(average_speed_mph)} MPH
            </li>
            <li class="list-group-item">Maximum Speed:</li>
          </ul>
        </div>
      </div>
    );
  }
}

<div class="card border-primary mb-3" style="max-width: 20rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h4 class="card-title">Primary card title</h4>
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
  </div>
</div>;
