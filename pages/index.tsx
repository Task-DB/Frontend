import type { NextPage } from "next";
import MainContainer from "../domain/main/container";

import React from "react";
import Head from "next/head";

const Main: NextPage = () => {
  return (
    <>
      <Head>
        <title>TaskDB</title>
        
      </Head>
      <section id={`main`}>
        <MainContainer />
      </section>
    </>
  );
};

export default Main;
