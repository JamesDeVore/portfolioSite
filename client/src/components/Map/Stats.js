import React from "react";
import moment from "moment";

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

export default function Stats({ data, isLive }) {
  if (data.length == 0) {
    return <div>Sorry, no data available :)</div>;
  } else {
    console.log(data);
    let average_speed_mph =
      (data.reduce((a, b) => a + b.speed, 0) / data.length) * 0.621371;

    let total_distance = haversineFormula(
      data.map((element) => [element.latitude, element.longitude])
    );
    total_distance = Math.round(total_distance * 100) / 100;
    console.log(total_distance);
    let start = moment(data[0].reading_date).format("MMM DD, YYYY");
    let end =
      data.length > 1
        ? moment([data.length - 1].reading_date).format("MMM DD, YYYY")
        : moment().format("MMM DD, YYYY");
    return (
      <div className="Stats-container container">
        <div className="row">
          <div className="col-md-12">
            <h3 className="text-center">Current Status:</h3>
            <p className="text-center font-weight-bold">
              {isLive
                ? "James is currently tracking!"
                : "James is not currently tracking"}
            </p>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h4>Distance:</h4>
          </div>
          <div className="col-md-9 offset-2 stat-box">
            Total Distance: {total_distance} miles
          </div>
          {/* <div className="col-md-6 stat-box"></div> */}
        </div>
        <div className="row">
          <div className="col-md-12">
            <h4>Speed</h4>
          </div>
          <div className="col-md-6 stat-box">
            Avg. Speed: {Math.round(average_speed_mph)} MPH
            <p>(maybe let the user click on it to highlight</p>
          </div>
          <div className="col-md-6 stat-box">Maximum Speed:</div>
        </div>
      </div>
    );
  }
}
