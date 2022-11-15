import React from "react";
import Head from "next/head";
import type { NextPage } from "next";
import MyContainer from "../../domain/my/container";

const MyPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>MyPage</title>
      </Head>
      <section id={`MyPage`}><MyContainer /></section>
    </>
  )
};
export default MyPage;