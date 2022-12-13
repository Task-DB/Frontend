import React from "react";
import type { NextPage } from "next";
import {
  BoardCommentsContent,
  BoardCommentsDetail,
  BoardCommentsEditContent,
  BoardCommentsWrapper,
} from "./comments.style";
import { DynamicRouteType, IndividualBoardType } from "../interface";
import ReplyForm from "./replyForm";
import { getRelativeDate, onChangeAction } from "../../../util";
import AdminMenu from "./adminMenu";

const Comments: NextPage<{
  boardData: IndividualBoardType;
  boardId: DynamicRouteType;
}> = ({ boardData, boardId }) => {
  const [content, setContent] = React.useState<string>("");
  const [isEdit, setIsEdit] = React.useState(false);
  const [editContent, setEditContent] = React.useState("");

  return (
    <section id={"comments"}>
      <BoardCommentsWrapper>
        {boardData?.comments.map((data, idx) => {
          return (
            <BoardCommentsDetail key={idx}>
              <span>{data.nickname}</span>

              {!isEdit ? (
                <BoardCommentsContent
                  dangerouslySetInnerHTML={{ __html: data.content }}
                />
              ) : (
                <ReplyForm
                  type="edit"
                  boardId={boardId}
                  content={editContent}
                  setContent={setEditContent}
                  width={"70"}
                  height={"100"}
                />
                // <BoardCommentsEditContent
                //   type="text"
                //   value={data.content}
                //   onChange={(event) => {
                //     onChangeAction(event, setContent);
                //   }}
                // />
              )}

              <span style={{ color: "gray" }}>
                {getRelativeDate(data.createdDate)}
              </span>
              {localStorage?.getItem("userId") === data.userId.toString() ? (
                <AdminMenu
                  method=""
                  boardId={data.id}
                  type="comment"
                  setIsEdit={setIsEdit}
                />
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
