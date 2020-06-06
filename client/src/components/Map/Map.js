import React, { useState } from "react";
import { Map, GoogleApiWrapper, Marker, Polyline } from "google-maps-react";

const mapStyles = {
  width: "35vw",
  height: "40vh",
};

let key = "AIzaSyCqVF5l17T_UvfAq65ZPURO1RA0GC3KvDk";

let tempMarkers = [
  { lat: 35.946461, lng: -78.833037 },
  { lat: 35.956934, lng: -78.841615 },
  { lat: 35.96953, lng: -78.848705 },
  { lat: 35.990163, lng: -78.862005 },
  { lat: 36.014768, lng: -78.88833 },
];
const MapContainer = ({ google }) => {
  const [center, setCenter] = useState(0);

  let line = (
    <Polyline
      fillColor="#0000FF"
      fillOpacity={0.35}
      path={tempMarkers}
      strokeColor="#0000FF"
      strokeOpacity={0.8}
      strokeWeight={2}
    />
  );
  let bounds = new google.maps.LatLngBounds();
  for (var i = 0; i < tempMarkers.length; i++) {
    bounds.extend(tempMarkers[i]);
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
      <button onClick={() => setCenter(center + 1)}>Hi</button>
      {false && (
        <Map
          google={google}
          zoom={10}
          style={mapStyles}
          initialCenter={tempMarkers[0]}
          center={tempMarkers[center]}
          bounds={bounds}
        >
          {tempMarkers.map((mark) => (
            <Marker position={{ lat: mark.lat, lng: mark.lng }} />
          ))}
          {line}
        </Map>
      )}
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: key,
})(MapContainer);
