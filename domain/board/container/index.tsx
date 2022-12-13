import React from "react";
import type { NextPage } from "next";
import Reply from "../components/reply";
import Comments from "../components/comments";
import Status from "../components/status";
import Title from "../components/title";
import { DynamicRouteType, IndividualBoardType } from "../interface";
import Content from "../components/content";
import { BoardWrapper } from "./index.style";
import { getBoardData } from "../api";
import Head from "next/head";

const BoardContainer: NextPage<{ boardId: DynamicRouteType }> = ({
  boardId,
}) => {
  const [boardData, setBoardData] = React.useState<IndividualBoardType>();

  React.useEffect(() => {
    if (boardId) {
      getBoardData(boardId).then((response) => {
        console.log(response);
        setBoardData(response);
      });
    }
  }, [boardId]);

  return (
    <>
      <Head>
        <title>{boardData?.title}</title>
      </Head>
      <section id={`board`}>
        <BoardWrapper>
          {boardData ? (
            <>
              <Title boardId={boardId} boardData={boardData!} />
              <Status boardData={boardData!} />
              <Content boardData={boardData!} />
              <Comments boardId={boardId} boardData={boardData!} />
              <Reply boardId={boardId} boardData={boardData!} />
            </>
          ) : (
            <>게시글을 볼 권한이 없습니다. 로그인하여 게시글을 확인하세요!</>
          )}
        </BoardWrapper>
      </section>
    </>
  );
};
export default BoardContainer;
