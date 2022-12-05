import React from "react";
import type { NextPage } from "next";
import { BoardWrapper, BoardTitle, BoardUserContent } from "./saveBoard.style";
import { UserInfoRightPropsType } from "../interface";

const Board: NextPage<UserInfoRightPropsType> = ({
  moveRef,
  uRef,
  mySavedQuestionData,
}) => {
  return (
    <BoardWrapper ref={moveRef}>
      <div ref={uRef}>
        <BoardTitle>내가 저장한 글</BoardTitle>
        <BoardUserContent>내용이 없습니다.</BoardUserContent>
      </div>
    </BoardWrapper>
  );
};
export default Board;
