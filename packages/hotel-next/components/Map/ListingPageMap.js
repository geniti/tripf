import React, { useState } from 'react';
import { Marker } from 'react-google-maps';
import HotelInfoWindow from './MapInfoWindow';
import MakerImage from './hotelMapMarker.png';

const HotelMapMarkerCluster = ({ location }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [markerIndex, setMarkerIndex] = useState(0);
  let hotelData = [];

  const infoWindowToggle = (index) => {
    setIsOpen(!isOpen);
    setMarkerIndex(index);
  };

  location &&
    location.forEach((item) => {
      hotelData.push({
        id: item.id,
        lat: parseFloat(item.location.lat),
        lng: parseFloat(item.location.lng),
        title: item.title,
        thumbUrl: item.image.thumb_url,
        formattedAddress: item.location.formattedAddress,
        price: item.price,
        rating: item.rating,
        ratingCount: item.ratingCount,
      });
    });

  return hotelData.map((singlePostLoaction, index) => {
    return (
      <Marker
        key={index}
        icon={MakerImage}
        position={singlePostLoaction}
        onClick={() => infoWindowToggle(singlePostLoaction.id)}
      >
        {isOpen && markerIndex === singlePostLoaction.id ? (
          <HotelInfoWindow
            data={singlePostLoaction}
            onCloseClick={() => infoWindowToggle(singlePostLoaction.id)}
          />
        ) : (
          ''
        )}
      </Marker>
    );
  });
};

export default HotelMapMarkerCluster;
