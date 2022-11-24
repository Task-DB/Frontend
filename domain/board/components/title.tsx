import React from "react";
import type { NextPage } from "next";
import { BoardNo, BoardTitle, BoardTitleWrapper } from "./title.style";
import { dynamicRouteType } from "../interface";

const Title: NextPage<{ boardId: dynamicRouteType }> = ({ boardId }) => {
  return (
    <section id={"title"}>
      <BoardTitleWrapper>
        <BoardTitle>몬스터즈 알려주실분</BoardTitle>
        <BoardNo>#{boardId}</BoardNo>
      </BoardTitleWrapper>
    </section>
  );
};
export default Title;
