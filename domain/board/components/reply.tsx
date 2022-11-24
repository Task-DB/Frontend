import React from "react";
import type { NextPage } from "next";
import {
  BoardContent,
  BoardContentWrapper,
  BoardReply,
  BoardReplyWrapper,
} from "./reply.style";
import BoardLikes from "./boardLikes";

const Reply: NextPage = () => {
  return (
    <section id={"reply"}>
      <BoardReplyWrapper>
        <BoardReply>1 답글</BoardReply>
        <BoardContentWrapper>
          <BoardLikes isReply={true} likes={1} />
          <BoardContent>
            왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루
          </BoardContent>
        </BoardContentWrapper>
      </BoardReplyWrapper>
    </section>
  );
};
export default Reply;
