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
  BoardReply,
  BoardReplyProvider,
  BoardStatus,
  BoardStatusProvider,
  BoardTitle,
  BoardTitleProvider,
  BoardViews,
} from "./[boardId].style";
import {
  CommentCertiticate,
  CommentDownButton,
  CommentUpButton,
  OpenBadge,
} from "../assets";
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
          <Image src={OpenBadge} alt="열린이슈" width={100} height={41} />
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
          <Image src={CommentUpButton} alt="올리기" />
          <BoardLikes>1</BoardLikes>
          <Image src={CommentDownButton} alt="내리기" />
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

      <BoardReplyProvider>
        <BoardReply>1 답글</BoardReply>
        <BoardContentProvider>
          <BoardLikesProvider>
            <Image src={CommentUpButton} alt="올리기" />
            <BoardLikes>1</BoardLikes>
            <Image src={CommentDownButton} alt="내리기" />
            <Image src={CommentCertiticate} alt="인증" />
          </BoardLikesProvider>
          <BoardContent>
            왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루
          </BoardContent>
        </BoardContentProvider>
      </BoardReplyProvider>
    </BoardProvider>
  );
};
export default BoardId;
