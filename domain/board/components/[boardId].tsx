import React from "react";
import type { NextPage } from "next";
import { IndividualBoardPropsType } from "../interface";
import {
  BoardComments,
  BoardCommentsProvider,
  BoardContent,
  BoardContentProvider,
  BoardDate,
  BoardLikes,
  BoardLikesProvider,
  BoardLine,
  BoardNo,
  BoardProvider,
  BoardStatus,
  BoardStatusProvider,
  BoardTitle,
  BoardTitleProvider,
  BoardViews,
} from "./[boardId].style";
import { CommentDownButton, CommentUpButton, OpenBadge } from "../assets";
import Image from "next/image";

const BoardId: NextPage<IndividualBoardPropsType> = ({ boardId }) => {
  return (
    <BoardProvider>
      <BoardTitleProvider>
        <BoardTitle>몬스터즈 알려주실분</BoardTitle>
        <BoardNo>#{boardId}</BoardNo>
      </BoardTitleProvider>

      <BoardStatusProvider>
        <BoardStatus>
          <Image src={OpenBadge} alt="열린이슈" />
          <BoardDate>
            질문한 날짜<span>오늘</span>
          </BoardDate>
          <BoardViews>
            조회수<span>20</span>
          </BoardViews>
        </BoardStatus>
      </BoardStatusProvider>

      <BoardLine width={"100"} />

      <BoardContentProvider>
        <BoardLikesProvider>
          <Image src={CommentUpButton} alt="" />
          <BoardLikes>1</BoardLikes>
          <Image src={CommentDownButton} alt="" />
        </BoardLikesProvider>
        <BoardContent>
          왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루
        </BoardContent>
      </BoardContentProvider>

      <BoardCommentsProvider>
        <BoardComments>
          싫은데요
          <span>5시간 전</span>
        </BoardComments>
        <BoardComments>
          싫은데요
          <span>5시간 전</span>
        </BoardComments>
      </BoardCommentsProvider>
    </BoardProvider>
  );
};
export default BoardId;
