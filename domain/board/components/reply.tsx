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

const Reply: NextPage = () => {
  const [content, setContent] = React.useState("");
  return (
    <section id={"reply"}>
      <ReplyWrapper>
        <ReplyCount>5 답변</ReplyCount>
        <ReplyForm content={content} setContent={setContent} />
        {new Array(5).fill(null).map((data, idx) => {
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
