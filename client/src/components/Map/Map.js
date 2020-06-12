import React, { useState } from "react";
import { Map, GoogleApiWrapper, Marker, Polyline } from "google-maps-react";

const mapStyles = {
  width: "45vw",
  height: "80vh",
};

const MapContainer = ({ google, coordinates, selectedMarker }) => {
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
  let marker = null;
  if (selectedMarker) {
    marker = <Marker position={coordinates[selectedMarker]} />;
  }
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        height: "75vh",
        display: "block",
      }}
    >
      {coordinates[0] && (
        <Map
          google={google}
          zoom={10}
          // style={mapStyles}
          initialCenter={coordinates[coordinates.length - 1]}
          center={selectedMarker ? coordinates[selectedMarker] : coordinates[0]}
          bounds={bounds}
        >
          {marker}
          {line}
        </Map>
      )}
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GAPI,
})(MapContainer);
