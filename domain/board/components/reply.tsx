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
import { dynamicRouteType, IndividualBoardType } from "../interface";
import { getRelativeDate } from "../../../util";
import AdminMenu from "./adminMenu";
import { handleAdopt, putAdopt } from "../api";

const Reply: NextPage<{
  boardId: dynamicRouteType;
  boardData: IndividualBoardType;
}> = ({ boardId, boardData }) => {
  const [content, setContent] = React.useState("");
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
                    time={getRelativeDate(data.createdDate)}
                    nickname={data.nickname}
                    profilePicture={data.userImage}
                  />
                  <ContentText
                    dangerouslySetInnerHTML={{ __html: data.content }}
                  />
                </Content>
                {localStorage?.getItem("userId") == data.userId.toString() ? (
                  <AdminMenu />
                ) : (
                  <></>
                )}
                {localStorage?.getItem("userId") ==
                boardData?.userId.toString() ? (
                  <div
                    onClick={() => {
                      console.log("채택");
                      handleAdopt(data.id)
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
