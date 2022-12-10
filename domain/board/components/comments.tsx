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
        {boardData?.comments.map((data, idx) => {
          return <BoardComments key={idx}>{data}</BoardComments>;
        })}
      </BoardCommentsWrapper>
      <ReplyForm
        type="comments"
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
