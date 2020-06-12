import React, { useState } from "react";
import { Map, GoogleApiWrapper, Marker, Polyline } from "google-maps-react";

const mapStyles = {
  width: "45vw",
  height: "80vh",
};

const MapContainer = ({ google, coordinates }) => {
  const [center, setCenter] = useState(0);
  console.log(coordinates);
  let line = (
    <Polyline
      fillColor="#0000FF"
      fillOpacity={0.35}
      path={coordinates}
      strokeColor="#0000FF"
      strokeOpacity={0.8}
      strokeWeight={2}
    />
  );
  let bounds = new google.maps.LatLngBounds();
  for (var i = 0; i < coordinates.length; i++) {
    bounds.extend(coordinates[i]);
  }
  return (
    <div
      style={{
        width: "200px",
        position: "relative",
        height: "50vh",
        display: "block",
      }}
    >
      {coordinates[0] && (
        <Map
          google={google}
          zoom={10}
          style={mapStyles}
          initialCenter={coordinates[coordinates.length - 1]}
          center={coordinates[center]}
          bounds={bounds}
        >
          {coordinates.map((mark, index) => (
            <Marker key={index} position={{ lat: mark.lat, lng: mark.lng }} />
          ))}
          {line}
        </Map>
      )}
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GAPI,
})(MapContainer);
