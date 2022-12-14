import React from "react";
import type { NextPage } from "next";
import { BoardContent, BoardContentWrapper } from "./content.style";
import BoardLikes from "./boardLikes";
import { IndividualBoardType } from "../interface";

const Content: NextPage<{ boardData: IndividualBoardType }> = ({
  boardData,
}) => {
  return (
    <section id={"content"}>
      <BoardContentWrapper>
        <BoardLikes
          method={""}
          hasLike={boardData?.hasLike}
          hasUnLike={boardData?.hasUnLike}
          likes={boardData?.likeCount}
          boardId={boardData?.id}
        />
        <BoardContent
          dangerouslySetInnerHTML={{ __html: boardData?.content }}
        />
      </BoardContentWrapper>
    </section>
  );
};
export default Content;
