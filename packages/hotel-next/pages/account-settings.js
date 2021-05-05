import React from 'react';
import Head from 'next/head';
import { AgentAccountSettingsPage } from 'container/Agent/';
import { getAPIData, processAPIData } from 'library/helpers/get-api-data';

export default function accountSettingsPage({ processedData }) {
  return (
    <>
      <Head>
        <title>Account Settings | TripFinder.</title>
      </Head>
      <AgentAccountSettingsPage processedData={processedData} />
    </>
  );
}

export async function getServerSideProps() {
  const apiUrl = [
    {
      endpoint: 'agent',
      name: 'agentProfile',
    },
  ];
  const pageData = await getAPIData(apiUrl);
  const processedData = processAPIData(pageData);
  return {
    props: { processedData },
  };
}
