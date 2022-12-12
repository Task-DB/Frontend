import React from "react";
import type { NextPage } from "next";
import {
  BoardCommentsContent,
  BoardCommentsDetail,
  BoardCommentsWrapper,
} from "./comments.style";
import { dynamicRouteType, IndividualBoardType } from "../interface";
import ReplyForm from "./replyForm";
import { getRelativeDate } from "../../../util";
import AdminMenu from "./adminMenu";

const Comments: NextPage<{
  boardData: IndividualBoardType;
  boardId: dynamicRouteType;
}> = ({ boardData, boardId }) => {
  const [content, setContent] = React.useState<string>("");
  return (
    <section id={"comments"}>
      <BoardCommentsWrapper>
        {boardData?.comments.map((data, idx) => {
          return (
            <BoardCommentsDetail key={idx}>
              <span>{data.nickname}</span>
              <BoardCommentsContent
                dangerouslySetInnerHTML={{ __html: data.content }}
              />
              <span style={{ color: "gray" }}>
                {getRelativeDate(data.createdDate)}
              </span>
              {localStorage?.getItem("userId") === data.userId.toString() ? (
                <AdminMenu boardId={data.id} type="comment" />
              ) : (
                <></>
              )}
            </BoardCommentsDetail>
          );
        })}
        {boardData.comments ? "" : "댓글이 없습니다!"}
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
