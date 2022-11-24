import React from "react";
import type { NextPage } from "next";
import { BoardContent, BoardContentWrapper, BoardLine } from "./content.style";
import BoardLikes from "./boardLikes";

const Content: NextPage = () => {
  return (
    <section id={"content"}>
      <BoardContentWrapper>
        <BoardLikes isReply={false} likes={3} />
        <BoardContent>
          왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루
        </BoardContent>
      </BoardContentWrapper>
    </section>
  );
};
export default Content;
