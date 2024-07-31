import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet"; // Import L for custom icons

// Define your custom icon
const customIcon = new L.Icon({
  iconUrl:
    "https://cdn.pixabay.com/photo/2016/11/28/06/09/map-1864379_960_720.png", // URL to your unique symbol
  iconSize: [32, 32], // Size of the icon
  iconAnchor: [16, 32], // Anchor point of the icon
  popupAnchor: [0, -32], // Anchor point of the popup
});

const MapComponent = ({ location }) => {
  if (!location) return null; // Early return if no location is provided

  return (
    <MapContainer
      center={[location.lat, location.lng]}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
      key={`${location.lat}-${location.lng}`} // Unique key to force re-render
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[location.lat, location.lng]} icon={customIcon}>
        <Popup>
          Location: {location.lat}, {location.lng}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
