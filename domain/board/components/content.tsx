import React from "react";
import type { NextPage } from "next";
import { BoardContent, BoardContentWrapper, BoardLine } from "./content.style";
import BoardLikes from "./boardLikes";
import { IndividualBoardType } from "../interface";

const Content: NextPage<{ boardData: IndividualBoardType }> = ({
  boardData,
}) => {
  return (
    <section id={"content"}>
      <BoardContentWrapper>
        <BoardLikes isReply={false} likes={3} />
        <BoardContent dangerouslySetInnerHTML={{ __html: boardData.content }} />
      </BoardContentWrapper>
    </section>
  );
};
export default Content;
