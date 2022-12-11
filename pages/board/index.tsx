import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import BoardContainer from "../../domain/board/container";

const Board: NextPage = () => {
  return (
    <>
      <Head>
        <title>게시글</title>
      </Head>
      <section id={`board`}>아니 이거 필요하나?</section>
    </>
  );
};
export default Board;
