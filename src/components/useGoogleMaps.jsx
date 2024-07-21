// MapComponent.jsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';  
import L from 'leaflet';  // 


const position = [41.4853, -71.3157];  

const MapComponent = () => {
  return (
    <MapContainer center={position} zoom={18} style={{ height: '70vh', width: '100%', zIndex:0 }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          modern art gallery
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
