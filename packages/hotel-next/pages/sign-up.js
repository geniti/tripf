import React from 'react';
import Head from 'next/head';
import SignUp from 'container/Auth/SignUp/SignUp';

export default function signUpPage() {
  return (
    <>
      <Head>
        <title>Sign Up | TripFinder.</title>
      </Head>
      <SignUp />
    </>
  );
}
