import React from 'react';
import isEmpty from 'lodash/isEmpty';
import Map from 'components/Map/Map';
import Loader from 'components/Loader/Loader';
import { FixedMap } from './Listing.style';

const ListingMap = (props) => {
  const { mapData, loading } = props;
  return (
    <FixedMap>
      {isEmpty(mapData) || loading ? (
        <Loader />
      ) : (
        <Map location={mapData} multiple={true} />
      )}
    </FixedMap>
  );
};

export default ListingMap;
