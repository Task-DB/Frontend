import React from "react";
import type { NextPage } from "next";
import { NextRouter, useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { dynamicRouteType } from "../../../../domain/board/interface";

const P: NextPage = () => {
  const router: NextRouter = useRouter();
  const route: ParsedUrlQuery = router.query; // 다이나믹 라우트 받는 부분
  const i: dynamicRouteType = route.i;
  return <></>;
};
export default P;
