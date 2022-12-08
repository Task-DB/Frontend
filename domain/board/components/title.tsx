import React from "react";
import type { NextPage } from "next";
import { BoardNo, BoardTitle, BoardTitleWrapper } from "./title.style";
import { dynamicRouteType, IndividualBoardType } from "../interface";

const Title: NextPage<{
  boardId: dynamicRouteType;
  boardData: IndividualBoardType;
}> = ({ boardId, boardData }) => {
  return (
    <section id={"title"}>
      <BoardTitleWrapper>
        <BoardTitle>{boardData?.title}</BoardTitle>
        <BoardNo>#{boardId}</BoardNo>
      </BoardTitleWrapper>
    </section>
  );
};
export default Title;
