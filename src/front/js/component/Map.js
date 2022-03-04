import * as PropTypes from "prop-types";
import React, { Component } from "react";
import "../../styles/Map.css"

const map;
const infowindow;

const Map = () => {
    const initMap = () => {
        var madrid = {lat: 40.4168, lng: 3.7038};
            map = new google.maps.Map(document.getElementById('map'), {
                center: madrid,
                zoom: 15
        });

        infowindow = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch({
          location: madrid,
          radius: 500,
          type: ['school']
        }, schoolCallback);
		
		service.nearbySearch({
          location: madrid,
          radius: 500,
          type: ['store']
        }, storeCallback);

      }

      function schoolCallback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            createSchoolMarker(results[i]); //results doesn't contain anything related to type (school,store,etc)
          }
        }
      }
	  
	  function storeCallback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            createStoreMarker(results[i]);
          }
        }
      }

      function createSchoolMarker(place) {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
icon:"http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/24/Categories-applications-education-school-icon.png",
          map: map,
          position: place.geometry.location
        });

		
        google.maps.event.addListener(marker, 'click', function() {
          infowindow.setContent(place.name);
          infowindow.open(map, this);
        });
      }
	  
	  
	   function createStoreMarker(place) {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
icon:"http://icons.iconarchive.com/icons/paomedia/small-n-flat/24/shop-icon.png",
          map: map,
          position: place.geometry.location
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.setContent(place.name);
          infowindow.open(map, this);
        });
      }

    } 
    return (
        <div id="map"></div>
    )
    
    export default Map