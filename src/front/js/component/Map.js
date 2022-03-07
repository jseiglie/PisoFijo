// import React from "react";
// import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// export default function SimpleMap(){
//   const defaultProps = {
//     center: {
//       lat: 10.99835602,
//       lng: 77.01502627
//     },
//     zoom: 11
//   };

//   return (
//     // Important! Always set the container height explicitly
//     <div style={{ height: '500px', width: '500px' }}>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: "AIzaSyC1728E0aNoOIFanm4pqLEJq4Q9Q8RqRKI" }}
//         defaultCenter={defaultProps.center}
//         defaultZoom={defaultProps.zoom}
//       >
//         <AnyReactComponent
//           lat={59.955413}
//           lng={30.337844}
//           text="My Marker"
//         />
//       </GoogleMapReact>
//     </div>
//   );
// }




import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDFE3td5eQXBdOJxSBikBJARyvj4VMc-6Q"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(Map)





// import * as PropTypes from "prop-types";
// import React, { Component } from "react";
// import { GoogleMap, LoadScript } from '@react-google-maps/api';
// import GoogleMapReact from 'google-map-react'
// import "../../styles/Map.css"

// const Map = () => {

//   const location = {
//     address: '1600 Amphitheatre Parkway, Mountain View, california.',
//     lat: 37.42216,
//     lng: -122.08427,
//   }
  
//   const zoomLevel = 10;

//   return(
//   <div className="map">
//     <h2 className="map-h2">Come Visit Us At Our Campus</h2>

//     <div className="google-map">
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: 'AIzaSyC1728E0aNoOIFanm4pqLEJq4Q9Q8RqRKI' }}
//         defaultCenter={location}
//         defaultZoom={zoomLevel}
//       >
//         <LocationPin
//           lat={location.lat}
//           lng={location.lng}
//           text={location.address}
//         />
//       </GoogleMapReact>
//     </div>
//   </div>
// )}

// export default Map;