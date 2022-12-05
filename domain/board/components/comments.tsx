import React from "react";
import type { NextPage } from "next";
import { BoardComments, BoardCommentsWrapper } from "./comments.style";
import { IndividualBoardType } from "../interface";

const Comments: NextPage<{ boardData: IndividualBoardType }> = ({
  boardData,
}) => {
  return (
    <section id={"comments"}>
      <BoardCommentsWrapper>
        <BoardComments>
          싫은데요
          <span>5시간 전</span>
        </BoardComments>
        <BoardComments>
          싫은데요
          <span>5시간 전</span>
        </BoardComments>
      </BoardCommentsWrapper>
    </section>
  );
};
export default Comments;
