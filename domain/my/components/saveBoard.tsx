import React from "react";
import type { NextPage } from "next";
import { BoardWrapper, BoardTitle, BoardUserContent } from "./saveBoard.style";
import { UserInfoRightPropsType } from "../interface";
import Link from "next/link";

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
            return (
              <div key={idx}>
                <Link href={`/board/${data.id}`}>
                  <a>{data.title}</a>
                </Link>
              </div>
            );
          })}
          {!mySavedQuestionData?.length
            ? "자주 찾는 게시글을 저장해보세요!"
            : ""}
        </BoardUserContent>
      </div>
    </BoardWrapper>
  );
};
export default Board;
