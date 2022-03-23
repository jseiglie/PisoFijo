//Problems to fix
//1- Cuando seleccionas otra cosa en el mapa que no sean los marcadores ya no funcionan las ventanas de visualizacion
//de nuestros marcadores

import React, {useContext, useEffect, useState } from 'react'
import { Context } from "../store/appContext.js";
import { GoogleMap, LoadScript, Marker, InfoWindow} from '@react-google-maps/api'
import googleMapsApiKey from "../store/credentialsAPIGoogle.js";

import exampleRequestIdealista from "../store/exampleRequestIdealista"

import DetailsCard  from './DetailsCard';
import { Link } from 'react-router-dom';

const Map = (props) => {

  const { store, actions } = useContext(Context);
  const [city, setCity] = useState([])
  
  const onSelect = item => {
    actions.getSelectedProperty(item);
  }
  
  const mapStyles = {        
    height: "90vh",
    width: "90vh"};
  
  const center = props.centerRequest

  useEffect(()=>{
       setCity(props.propertiesSearch.map((item,index) => {
        return (
        <Marker key={index} 
        position={{lat:parseFloat(item.latitude), lng:parseFloat(item.longitude)}}
        // position={{lat: 40.4292726, lng:-3.6839874}}
        onClick={() => onSelect(item)}/>
        )
      }))
  },[store.propertiesSearch])

  return (
     <LoadScript
       googleMapsApiKey= {googleMapsApiKey}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={center}>

          {city}

          {
            props.viewInfoWindow && store.selected.propertyCode && 
            (
              <InfoWindow
              position={{lat: parseFloat(store.selected.latitude), lng: parseFloat(store.selected.longitude)}}
              // position={{lat: 40.4292726, lng:-3.6839874}}
              clickable={true}
              onCloseClick={() => actions.getSelectedProperty({})}
            >
              <Link to="/details">
                <DetailsCard
                  urlImg={store.selected.thumbnail}
                  type={store.selected.propertyType}
                  location={`${store.selected.district}, ${store.selected.municipality}`}
                  value={store.selected.price}
                  area={store.selected.size}
                  numRooms={store.selected.rooms}
                  floor={store.selected.bathrooms}
                  fav={true}      
                />
              </Link>
            </InfoWindow>
            )
          }
        </GoogleMap>
     </LoadScript>
  )
}



export default Map;