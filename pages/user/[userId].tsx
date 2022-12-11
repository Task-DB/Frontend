import React from "react";
import Head from "next/head";
import type { NextPage } from "next";
import { NextRouter, useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { dynamicRouteType } from "../../domain/board/interface";
import UserContainer from "../../domain/user/container";

const User: NextPage = () => {
  const router: NextRouter = useRouter();
  const route: ParsedUrlQuery = router.query; // 다이나믹 라우트 받는 부분
  const userId: dynamicRouteType = route.userId;
  return (
    <>
      <Head>
        <title>User</title>
      </Head>
      <section id={`User`}>
        <UserContainer userId={userId} />
      </section>
    </>
  );
};
export default User;
