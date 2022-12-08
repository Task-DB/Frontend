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
        />
        {new Array(1).fill(null).map((data, idx) => {
          return (
            <ReplyContentWrapper key={idx}>
              <ContentWrapper>
                <BoardLikes isReply={true} likes={idx} />
                <Content>
                  <Author nickname="남세원" profilePicture={ProfilePicture} />
                  <ContentText>
                    왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루
                  </ContentText>
                </Content>
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
