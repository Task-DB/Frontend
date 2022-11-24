import React from "react";
import type { NextPage } from "next";
import {
  Content,
  ContentText,
  ContentWrapper,
  Line,
  ReplyCount,
  ReplyWrapper,
} from "./reply.style";
import BoardLikes from "./boardLikes";
import Author from "./author";
import { ProfilePicture } from "../../my/assets";

const Reply: NextPage = () => {
  return (
    <section id={"reply"}>
      <ReplyWrapper>
        <ReplyCount>5 답글</ReplyCount>

        {new Array(5).fill(null).map((data, idx) => {
          return (
            <>
              <ContentWrapper key={idx}>
                <BoardLikes isReply={true} likes={idx} />
                <Content>
                  <Author nickname="남세원" profilePicture={ProfilePicture} />
                  <ContentText>
                    왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루
                  </ContentText>
                </Content>
              </ContentWrapper>
              <Line width={`100`} />
            </>
          );
        })}
      </ReplyWrapper>
    </section>
  );
};
export default Reply;
