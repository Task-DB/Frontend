import React from "react";
import type { NextPage } from "next";
import { IndividualBoardPropsType } from "../interface";
import {
  BoardComments,
  BoardCommentsWrapper,
  BoardContent,
  BoardContentWrapper,
  BoardDate,
  BoardLikes,
  BoardLikesWrapper,
  BoardLine,
  BoardNo,
  BoardWrapper,
  BoardReply,
  BoardReplyWrapper,
  BoardStatus,
  BoardStatusWrapper,
  BoardTitle,
  BoardTitleWrapper,
  BoardViews,
  CertificateWrapper,
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
    <BoardWrapper>
      <BoardTitleWrapper>
        <BoardTitle>몬스터즈 알려주실분</BoardTitle>
        <BoardNo>#{boardId}</BoardNo>
      </BoardTitleWrapper>

      <BoardStatusWrapper>
        <BoardStatus>
          <Image src={OpenBadge} alt="열린이슈" width={100} height={41} />
          <BoardDate>
            질문한 날짜<span>오늘</span>
          </BoardDate>
          <BoardViews>
            조회수<span>20</span>
          </BoardViews>
        </BoardStatus>
      </BoardStatusWrapper>

      <BoardLine width={"100"} />

      <BoardContentWrapper>
        <BoardLikesWrapper>
          <Image src={CommentUpButton} alt="올리기" />
          <BoardLikes>1</BoardLikes>
          <Image src={CommentDownButton} alt="내리기" />
        </BoardLikesWrapper>
        <BoardContent>
          왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루
        </BoardContent>
      </BoardContentWrapper>

      <BoardCommentsWrapper>
        <BoardComments>
          싫은데요
          <span>5시간 전</span>
        </BoardComments>
        <BoardComments>
          싫은데요
          <span>5시간 전</span>
        </BoardComments>
      </BoardCommentsWrapper>

      <BoardReplyWrapper>
        <BoardReply>1 답글</BoardReply>
        <BoardContentWrapper>
          <BoardLikesWrapper>
            <Image src={CommentUpButton} alt="올리기" />
            <BoardLikes>1</BoardLikes>
            <Image src={CommentDownButton} alt="내리기" />
            <CertificateWrapper>
              <Image src={CommentCertiticate} alt="인증" />
            </CertificateWrapper>
          </BoardLikesWrapper>
          <BoardContent>
            왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루왈랄랄루
          </BoardContent>
        </BoardContentWrapper>
      </BoardReplyWrapper>
    </BoardWrapper>
  );
};
export default BoardId;
