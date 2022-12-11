import React from "react";
import Head from "next/head";
import type { NextPage } from "next";
import WriteContainer from "../../../domain/write/container";
import { NextRouter, useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { dynamicRouteType } from "../../../domain/board/interface";

const Edit: NextPage = () => {
  const router: NextRouter = useRouter();
  const route: ParsedUrlQuery = router.query; // 다이나믹 라우트 받는 부분
  const boardId: dynamicRouteType = route.boardId;
  return (
    <>
      <Head>
        <title>Edit</title>
      </Head>
      <section id={`Edit`}>
        <WriteContainer boardId={boardId} />
      </section>
    </>
  );
};
export default Edit;
