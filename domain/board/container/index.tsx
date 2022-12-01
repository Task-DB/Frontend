import React from "react";
import type { NextPage } from "next";
import Reply from "../components/reply";
import Comments from "../components/comments";
import Status from "../components/status";
import Title from "../components/title";
import { dynamicRouteType } from "../interface";
import Content from "../components/content";
import { BoardWrapper } from "./index.style";
import { getBoardData } from "../api";

const BoardContainer: NextPage<{ boardId: dynamicRouteType }> = ({
  boardId,
}) => {
  React.useEffect(() => {
    if (boardId) {
      getBoardData(boardId)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [boardId]);

  return (
    <section id={`board`}>
      <BoardWrapper>
        <Title boardId={boardId} />
        <Status />
        <Content />
        <Comments />
        <Reply boardId={boardId} />
      </BoardWrapper>
    </section>
  );
};
export default BoardContainer;
