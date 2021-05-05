import React from 'react';
import { InfoWindow } from 'react-google-maps';
import Rating from 'components/UI/Rating/Rating';
import GridCard from '../GridCard/GridCard';

const MapInfoWindow = ({ data, onCloseClick }) => {
  return (
    <InfoWindow id={data?.id} onCloseClick={onCloseClick}>
      <GridCard
        className="info_window_card"
        location={data?.formattedAddress}
        title={data?.title}
        price={`$${data?.price}/Night - Free Cancellation`}
        rating={
          <Rating
            rating={data?.rating}
            ratingCount={data?.ratingCount}
            type="bulk"
          />
        }
      >
        <img src={data?.thumbUrl} alt={data?.title} />
      </GridCard>
    </InfoWindow>
  );
};

export default MapInfoWindow;
