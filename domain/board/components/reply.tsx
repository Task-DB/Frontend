import React from "react";
import type { NextPage } from "next";
import {
  Content,
  ContentText,
  ContentWrapper,
  Line,
  ReplyContentWrapper,
  ReplyCount,
  ReplyWrapper,
} from "./reply.style";
import BoardLikes from "./boardLikes";
import Author from "./author";
import { ProfilePicture } from "../../my/assets";
import ReplyForm from "./replyForm";
import { DynamicRouteType, IndividualBoardType } from "../interface";
import { getRelativeDate } from "../../../util";
import AdminMenu from "./adminMenu";
import { handleAdopt, putAdopt } from "../api";

const Reply: NextPage<{
  boardId: DynamicRouteType;
  boardData: IndividualBoardType;
}> = ({ boardId, boardData }) => {
  const [content, setContent] = React.useState("");
  const [isEdit, setIsEdit] = React.useState(false);

  console.log();
  return (
    <section id={"reply"}>
      <ReplyWrapper>
        <ReplyCount>{boardData?.answers.length} 답변</ReplyCount>
        <ReplyForm
          boardId={boardId}
          content={content}
          setContent={setContent}
          width={"100"}
          height={"450"}
          type="reply"
        />
        {boardData?.answers.map((data, idx) => {
          return (
            <ReplyContentWrapper key={idx}>
              <ContentWrapper>
                <BoardLikes
                  isReply={data.status === "채택"}
                  likes={data.likeCount}
                />
                <Content>
                  <Author
                    nickname={data.nickname}
                    profilePicture={data.userImage}
                  />
                  <ContentText
                    dangerouslySetInnerHTML={{ __html: data.content }}
                  />
                </Content>
                {localStorage?.getItem("userId") === data.userId.toString() &&
                data.status !== "채택" ? (
                  <AdminMenu
                    method=""
                    boardId={data.id}
                    type="answer"
                    setIsEdit={setIsEdit}
                  />
                ) : (
                  <></>
                )}
                {localStorage?.getItem("userId") ===
                  boardData?.userId.toString() &&
                boardData.status === "OPEN" ? (
                  <div
                    style={{
                      color: "white",
                      background: "black",
                      border: "1px solid white",
                      width: "70px",
                      padding: ".1rem",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    onClick={() => {
                      handleAdopt(data.id);
                    }}
                  >
                    채택
                  </div>
                ) : (
                  <></>
                )}
              </ContentWrapper>
              <Line width={`100`} />
            </ReplyContentWrapper>
          );
        })}
      </ReplyWrapper>
    </section>
  );
};
export default Reply;
