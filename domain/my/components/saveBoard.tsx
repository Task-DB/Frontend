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
        <BoardUserContent>
          {mySavedQuestionData?.map((data, idx) => {
            return <div key={idx}>{data}</div>;
          })}
          {!mySavedQuestionData?.length ? "내가 자주 찾는 게시글을 저장해보세요!" : ""}
        </BoardUserContent>
      </div>
    </BoardWrapper>
  );
};
export default Board;
