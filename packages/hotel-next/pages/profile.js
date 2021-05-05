import React from 'react';
import Head from 'next/head';
import { AgentDetailsViewPage } from 'container/Agent/index';
import { getAPIData, processAPIData } from 'library/helpers/get-api-data';
import { getDeviceType } from 'library/helpers/get-device-type';

export default function profilePage(props) {
  return (
    <>
      <Head>
        <title>Agent | TripFinder.</title>
      </Head>
      <AgentDetailsViewPage {...props} />
    </>
  );
}

export async function getServerSideProps(context) {
  const { req } = context;
  const apiUrl = [
    {
      endpoint: 'agent',
      name: 'listingAgent',
    },
  ];
  const pageData = await getAPIData(apiUrl);
  const processedData = processAPIData(pageData);
  const deviceType = getDeviceType(req);
  return {
    props: { processedData, deviceType },
  };
}
