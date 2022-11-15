import React from "react";
import type { NextPage } from "next";
import { BoardProvider, BoardTitle, BoardUserContent } from "./board.style";

const Board: NextPage<{ moveRef: React.RefObject<HTMLDivElement> }> = ({
  moveRef,
}) => {
  return (
    <>
      <BoardProvider ref={moveRef}>
        <BoardTitle>게시글</BoardTitle>
        <BoardUserContent>내용이 없습니다.</BoardUserContent>
        <BoardUserContent>내용이 없습니다.</BoardUserContent>
        <BoardUserContent>내용이 없습니다.</BoardUserContent>
        <BoardUserContent>내용이 없습니다.</BoardUserContent>
        <BoardUserContent>내용이 없습니다.</BoardUserContent>
        <BoardUserContent>내용이 없습니다.</BoardUserContent>
        <BoardUserContent>내용이 없습니다.</BoardUserContent>
        <BoardUserContent>내용이 없습니다.</BoardUserContent>
        <BoardUserContent>내용이 없습니다.</BoardUserContent>
        <BoardUserContent>내용이 없습니다.</BoardUserContent>
        <BoardUserContent>내용이 없습니다.</BoardUserContent>
        <BoardUserContent>내용이 없습니다.</BoardUserContent>
        <BoardUserContent>내용이 없습니다.</BoardUserContent>
        <BoardUserContent>내용이 없습니다.</BoardUserContent>
        <BoardUserContent>내용이 없습니다.</BoardUserContent>
        <BoardUserContent>내용이 없습니다.</BoardUserContent>
        <BoardUserContent>내용이 없습니다.</BoardUserContent>
        <BoardUserContent>내용이 없습니다.</BoardUserContent>
        <BoardUserContent>내용이 없습니다.</BoardUserContent>
        <BoardUserContent>내용이 없습니다.</BoardUserContent>
        <BoardUserContent>내용이 없습니다.</BoardUserContent>
        <BoardUserContent>내용이 없습니다.</BoardUserContent>
        <BoardUserContent>내용이 없습니다.</BoardUserContent>
        <BoardUserContent>내용이 없습니다.</BoardUserContent>
        <BoardUserContent>내용이 없습니다.</BoardUserContent>
        <BoardUserContent>내용이 없습니다.</BoardUserContent>
        <BoardUserContent>내용이 없습니다.</BoardUserContent>
        <BoardUserContent>내용이 없습니다.</BoardUserContent>
        <BoardUserContent>내용이 없습니다.</BoardUserContent>
        <BoardUserContent>내용이 없습니다.</BoardUserContent>
        <BoardUserContent>내용이 없습니다.</BoardUserContent>
        <BoardUserContent>내용이 없습니다.</BoardUserContent>
        <BoardUserContent>내용이 없습니다.</BoardUserContent>
        <BoardUserContent>내용이 없습니다.</BoardUserContent>
        <BoardUserContent>내용이 없습니다.</BoardUserContent>
        <BoardUserContent>내용이 없습니다.</BoardUserContent>
        <BoardUserContent>내용이 없습니다.</BoardUserContent>
        <BoardUserContent>내용이 없습니다.</BoardUserContent>
        <BoardUserContent>내용이 없습니다.</BoardUserContent>
      </BoardProvider>
    </>
  );
};
export default Board;
