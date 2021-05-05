import React from 'react';
import Head from 'next/head';
import AddListing from 'container/AddListing/AddListing';

export default function addHotelPage() {
  return (
    <>
      <Head>
        <title>Add Hotel | TripFinder.</title>
      </Head>
      <AddListing />
    </>
  );
}
