import React from "react";
import Head from "next/head";
import type { NextPage } from "next";
import SignupContainer from "../../domain/signup/container";

const SignupPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Signup</title>
      </Head>
      <section id={`signup`}>
        <SignupContainer />
      </section>
    </>
  );
};
export default SignupPage;
