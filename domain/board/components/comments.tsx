import React from "react";
import type { NextPage } from "next";
import { BoardComments, BoardCommentsWrapper } from "./comments.style";
import { dynamicRouteType, IndividualBoardType } from "../interface";
import ReplyForm from "./replyForm";

const Comments: NextPage<{
  boardData: IndividualBoardType;
  boardId: dynamicRouteType;
}> = ({ boardData, boardId }) => {
  const [content, setContent] = React.useState<string>("");
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
      <ReplyForm
        boardId={boardId}
        content={content}
        setContent={setContent}
        width={"70"}
        height={"100"}
      />
    </section>
  );
};
export default Comments;
