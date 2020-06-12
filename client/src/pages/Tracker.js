import React, { useState, useEffect } from "react";
import Map from "../components/Map/Map";
import Stats from "../components/Map/Stats";
import moment from "moment";

export default function Tracker() {
  const [coordinates, setCoordinates] = useState([]);
  const [isTracking, setIsTracking] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [timeFrame, setTimeFrame] = useState(0);
  // useEffect(() => {
  //   fetch("/api/getCoordinates")
  //     .then((res) => res.json())
  //     .then((res) => setCoordinates(res.data));
  // }, []);

  useEffect(() => {
    fetch("/api/checkLive")
      .then((res) => res.json())
      .then((res) => setIsTracking(res.data));
  }, []);

  useEffect(() => {
    let start_date = null;
    switch (String(timeFrame)) {
      case "0":
        start_date = moment().subtract(1, "days").format("YYYY-MM-DD");
        break;
      case "1":
        start_date = moment().subtract(7, "days").format("YYYY-MM-DD");
        break;
    }
    // console.log(start_date);
    fetch(`/api/getCoordinates?start_date=${start_date}`)
      .then((res) => res.json())
      .then((res) => setCoordinates(res.data));
  }, [timeFrame]);

  const handleMarker = (value) => {
    setSelectedMarker(value);
  };
  return (
    <div className="HomeContainer container">
      <div className="row">
        <div className="col-md-8">
          <Map
            selectedMarker={selectedMarker}
            coordinates={coordinates.map((coord) => {
              return {
                lat: coord.latitude,
                lng: coord.longitude,
              };
            })}
          />
        </div>
        <div className="col-md-4 text-center">
          <Stats
            data={coordinates}
            isLive={isTracking}
            handleMarker={handleMarker}
            timeframe={timeFrame}
            setTimeFrame={setTimeFrame}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <h1>What is this?</h1>
        </div>
        <div className="col-12">
          <p>
            Anyone who has talked to me about motorcycles in the last few years
            has undoubetdly heard me talk about my desire to take along cross
            country road trip. No real route planned out, no real schedule, just
            me and the open road.
          </p>
          <p>
            Because I{" "}
            <ul>
              <li>Want to be safe</li>
              <li>Like making things</li>
              <li>Want to know the exact route I end up taking</li>
            </ul>
            <p>
              I went and created a one of a kind (marketing speak for 'a little
              janky') arduino based motorcycle tracker.
            </p>
          </p>
        </div>
      </div>{" "}
      <div className="row">
        <h3>How it works:</h3>
      </div>
    </div>
  );
}
