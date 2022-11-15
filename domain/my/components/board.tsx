import React from "react";
import type { NextPage } from "next";
import { BoardProvider, BoardTitle, BoardUserContent } from "./board.style";
import { UserInfoRightPropsType } from "../interface";

const Board: NextPage<UserInfoRightPropsType> = ({ moveRef, ref, isTop }) => {
  return (
    <BoardProvider ref={moveRef} isTop={isTop}>
      <div ref={ref}>
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
      </div>
    </BoardProvider>
  );
};
export default Board;
