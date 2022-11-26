import React from "react";
import Head from "next/head";
import type { NextPage } from "next";
import LoginContainer from "../../domain/login/container";

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <section id={`login`}>
        <LoginContainer />
      </section>
    </>
  );
};
export default Login;
