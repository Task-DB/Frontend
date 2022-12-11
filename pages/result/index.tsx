import React from "react";
import Head from "next/head";
import type { NextPage } from "next";
import ResultPage from "../../domain/header/components/result";

const Result: NextPage = () => {
  return (
    <>
      <Head>
        <title>Result</title>
      </Head>
      <section id={`Result`}>
        <ResultPage />
      </section>
    </>
  );
};
export default Result;
