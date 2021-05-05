import React, { useState, useRef } from 'react';
import _ from 'lodash';
import { Marker } from 'react-google-maps';
import MapWrapper from './MapWrapper';
import { Input } from 'antd';
import makerImage from './hotelMapMarker.png';
const {
  SearchBox,
} = require('react-google-maps/lib/components/places/SearchBox');

const MapWithSearchBox = (props) => {
  const [dragNDropData, setDragNDropData] = useState([]);
  const { updateValue, name } = props;
  const [locationInput, setLocationInput] = useState({ searchedLocation: '' });
  const [locationDetails, setLocationDetails] = useState({
    center: {
      lat: 40.7128,
      lng: -74.006,
    },
    markers: [
      {
        position: {
          lat: 40.7128,
          lng: -74.006,
        },
      },
    ],
    places: [],
  });
  // const googleMapRef = useRef(null);
  const SearchBoxRef = useRef(null);
  const onPlacesChanged = () => {
    const places = SearchBoxRef.current.getPlaces();
    const bounds = new window.google.maps.LatLngBounds();
    places.forEach((place) => {
      if (place.geometry.viewport) {
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    const nextMarkers = places.map((place) => ({
      position: place.geometry.location,
    }));
    const nextCenter = _.get(nextMarkers, '0.position', locationDetails.center);

    setLocationDetails({
      places,
      center: nextCenter,
      markers: nextMarkers,
    });
    setLocationInput({
      searchedLocation: places && places[0] && places[0].formatted_address,
    });
    updateValue(places);
  };

  const handleOnChange = (event) => {
    event.stopPropagation();
    if (event.which === '13') {
      event.preventDefault();
    }
    setLocationInput({ searchedLocation: event.target.value });
  };

  const handleOnPressEnter = (event) => {
    event.stopPropagation();
    if (event.which === '13') {
      event.preventDefault();
    }
    setLocationInput({ searchedLocation: event.target.value });
  };

  const onDragEndFunc = (marker) => {
    let tempLocArray = [];
    var geocoder = new window.google.maps.Geocoder();
    const latlng = {
      lat: Number(marker.latLng.lat().toFixed(4)),
      lng: Number(marker.latLng.lng().toFixed(4)),
    };

    setLocationDetails({
      ...locationDetails,
      center: latlng,
    });

    geocoder.geocode({ latLng: latlng }, function (results, status) {
      console.log(results, 'results');
      if (results[0] && results[0].formatted_address) {
        setLocationInput({
          searchedLocation: results[0] && results[0].formatted_address,
        });
        const location = {
          place_id: results[0].place_id,
          formatted_address: results[0].formatted_address,
          address_components: results[0].address_components,
          geometry: results[0].geometry,
        };
        tempLocArray.push(location);
      }
      setDragNDropData(tempLocArray);
    });
    updateValue(dragNDropData);
  };

  return (
    <MapWrapper
      containerElement={<div style={{ height: '400px' }} />}
      mapElement={<div style={{ height: '100%' }} />}
      defaultZoom={15}
      center={locationDetails.center}
    >
      <SearchBox
        ref={SearchBoxRef}
        controlPosition={window.google.maps.ControlPosition.TOP_LEFT}
        onPlacesChanged={onPlacesChanged}
      >
        <Input
          type="text"
          name={name}
          placeholder="Enter your hotel location"
          style={{
            boxSizing: `border-box`,
            border: `1px solid transparent`,
            width: `260px`,
            height: `40px`,
            marginTop: `10px`,
            padding: `0 12px`,
            borderRadius: `2px`,
            boxShadow: `0 3px 6px rgba(0, 0, 0, 0.16)`,
            fontSize: `15px`,
            outline: `none`,
            textOverflow: `ellipses`,
          }}
          defaultValue=""
          value={locationInput ? locationInput.searchedLocation : ''}
          onChange={handleOnChange}
          onPressEnter={handleOnPressEnter}
        />
      </SearchBox>
      {locationDetails.markers.map((marker, index) => {
        return (
          <Marker
            icon={makerImage}
            key={index}
            position={marker.position}
            onDragEnd={(marker) => onDragEndFunc(marker)}
          />
        );
      })}
    </MapWrapper>
  );
};

export default MapWithSearchBox;
