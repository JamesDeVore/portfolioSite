import React, { useState, useEffect } from "react";
import Map from "../components/Map/Map";
import Stats from "../components/Map/Stats";
import moment from "moment";
import arduino from "../assets/tracker/arduino.JPG";
import arduino2 from "../assets/tracker/arduino1.JPG";
import twilio from "../assets/tracker/twilio.png";
import awsLogo from "../assets/aws.png";
import Carousel from "../components/projects/ImgCarousel";

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
      case "1":
        start_date = moment().subtract(7, "days").format("YYYY-MM-DD");
        break;
      case "2":
        start_date = moment().subtract(1, "days").format("YYYY-MM-DD");
        break;
    }
    // console.log(start_date);
    fetch(`/api/getCoordinates?start_date=${start_date}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setCoordinates(res.data);
      });
  }, [timeFrame]);

  const handleMarker = (value) => {
    setSelectedMarker(value);
  };
  return (
    <div className="HomeContainer container">
      <div className="row">
        <div className="col-md-7">
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
        <div className="col-md-5 text-center">
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
        <div className="col-md-8 offset-2 mb-4">
          <div className=" card p-3 border-primary tracker-title">
            <div className="card-header">
              <h2 className="text-center">What is this?</h2>
            </div>
            <div className="card-body">
              <p>
                This is a "live" tracker that I created from a few arduino
                parts, and am using it to track my progress across the country.
              </p>
              <hr />
              <p>
                Every few minutes my Arduino updates this page with my current
                location, and if you're lucky, you'll see the charts area turn a
                bright green, which indcates I am currently live tracking
              </p>
              <hr />
              <p>
                Feel free to text <strong>(919)717-6636</strong> if I am
                currently tracking and you will recieve live statistics on where
                I am now (including a google maps link)! You won't recieve a
                response if the tracker is off...because well, it is off.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-10 offset-1">
          <div className="card border-primary p-3">
            <div className="card-header">
              <h2>How does it work?</h2>
            </div>
            <div className="card-img mt-2">
              <div className="carousel-container">
                <Carousel images={[arduino, arduino2, twilio]} />
              </div>
            </div>
            <div className="card-body">
              <ol className="list-group">
                <li className="list-group-item">
                  First, the arduino fetches my exact GPS coordinates by
                  communicating with sattelites that are orbiting the earth.
                </li>
                <li className="list-group-item">
                  Next, using a prepaid SIM card, the arduino sends a text
                  containing location, speed, and altitude date to Twilio, which
                  is essentially a digital phone number that I can use to
                  trigger events (called 'webhooks').
                </li>
                <li className="list-group-item">
                  As soon as Twilio recieves the text, the forwrd the message to
                  this site which validates the data, transforms it, and saves
                  onto my own personal AWS database. Then, when people (like
                  you) visit this page, the database serves up all the data that
                  has been collected so far. Simple, right?
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
