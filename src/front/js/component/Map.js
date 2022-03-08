import React, { useState, useContext } from 'react'
import { Context } from "../store/appContext.js";
import { GoogleMap, LoadScript, Marker, InfoWindow} from '@react-google-maps/api'

import DetailsCard  from './DetailsCard';

const Map = () => {

  const { store, actions } = useContext(Context);
  const [ selected, setSelected ] = useState({});
  
  const onSelect = item => {
    setSelected(item);
    console.log("Selected: ", selected);
    console.log("Selected lat", selected.latitude);
    console.log("Selected lon", selected.longitude);
  }
  
  const mapStyles = {        
    height: "90vh",
    width: "90vh"};
  
  const defaultCenter = store.centerRequest
  
  
  const locations = store.propertiesSearch
  //[
  //   {
  //     name: "Location 1",
  //     location: { 
  //       lat: 41.3954,
  //       lng: 2.162 
  //     },
  //   },
  //   {
  //     name: "Location 2",
  //     location: { 
  //       lat: 41.3917,
  //       lng: 2.1649
  //     },
  //   },
  //   {
  //     name: "Location 3",
  //     location: { 
  //       lat: 41.3773,
  //       lng: 2.1585
  //     },
  //   },
  //   {
  //     name: "Location 4",
  //     location: { 
  //       lat: 41.3797,
  //       lng: 2.1682
  //     },
  //   },
  //   {
  //     name: "Location 5",
  //     location: { 
  //       lat: 41.4055,
  //       lng: 2.1915
  //     },
  //   }
  // ];

   console.log("Property datas", locations);

  return (
     <LoadScript
       googleMapsApiKey='AIzaSyDFE3td5eQXBdOJxSBikBJARyvj4VMc-6Q'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}>
          {
            locations.map(item => {
              return (
              <Marker key={item.propertyCode} 
              position={{lat:item.latitude, lng:item.longitude}}
              onClick={() => onSelect(item)}/>
              )
            })
          }

          {
            selected.propertyCode && 
            (
              <InfoWindow
              // position={selected.location}
              position={{lat: selected.latitude, lng: selected.longitude}}
              clickable={true}
              onCloseClick={() => setSelected({})}
            >
              <DetailsCard/>
            </InfoWindow>
            )
          }
        </GoogleMap>
     </LoadScript>
  )
}

export default Map;










// const containerStyle = {
//   width: '90vh',
//   height: '90vh'
// };

// const center = {
//   lat: 41.3851, 
//   lng: 2.1734
// };



// const Map = () => {

//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: "AIzaSyDFE3td5eQXBdOJxSBikBJARyvj4VMc-6Q"
//   })

//   const [map, setMap] = React.useState(null)

//   const onLoad = React.useCallback(function callback(map) {
//     const bounds = new window.google.maps.LatLngBounds();
//     map.fitBounds(bounds);
//     setMap(map)
//   }, [])

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null)
//   }, [])

//   return isLoaded ? (
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={13}
//         onLoad={onLoad}
//         onUnmount={onUnmount}
//       >
//       {
//         locations.map(item => {
//           return (
//           <Marker key={item.name} position={item.location}/>
//           )
//         })
//       }
//       </GoogleMap>
//   ) : <></>
// }

// export default React.memo(Map)