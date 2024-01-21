// GoogleMap.js
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 37.7749, // Latitude de la position
  lng: -122.4194, // Longitude de la position
};

const GoogleMapComponent = () => {
  return (
    <LoadScript
      googleMapsApiKey="VOTRE_CLE_API_GOOGLE_MAPS" // FIXME here i should put a google map api key
    >
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={15} // Ajustez le niveau de zoom selon vos besoins
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
