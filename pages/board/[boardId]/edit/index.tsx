import React from "react";
import type { NextPage } from "next";
import { NextRouter, useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { DynamicRouteType } from "../../../../domain/board/interface";
import EditContainer from "../../../../domain/edit/container";

const Edit: NextPage = () => {
  const router: NextRouter = useRouter();
  const route: ParsedUrlQuery = router.query; // 다이나믹 라우트 받는 부분
  const boardId = route.boardId;
  return <EditContainer boardId={Number(boardId)} />;
};
export default Edit;
