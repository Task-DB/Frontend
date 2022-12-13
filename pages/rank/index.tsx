import React from "react";
import Head from "next/head";
import type { NextPage } from "next";
import RankContainer from "../../domain/rank/container";

const Rank: NextPage = () => {
  return (
    <>
      <Head>
        <title>순위</title>
      </Head>
      <section id={`Rank`}>
        <RankContainer />
      </section>
    </>
  );
};
export default Rank;
