import React from "react";
import type { NextPage } from "next";
import Image from "next/image";

import {
  CommentCertiticate,
  CommentDownButton,
  CommentHasDownButton,
  CommentHasUpButton,
  CommentUpButton,
} from "../assets";
import {
  BoardLikesCount,
  BoardLikesWrapper,
  CertificateWrapper,
} from "./boardLikes.style";
import { putAnswerLike, putAnswerUnLike, putLike, putUnLike } from "../api";
import { DynamicRouteType } from "../interface";
import { useRouter } from "next/router";

const BoardLikes: NextPage<{
  isReply?: boolean;
  likes: number;
  hasLike: boolean;
  hasUnLike: boolean;
  boardId: DynamicRouteType;
  method: string;
}> = ({ isReply, likes, hasLike, hasUnLike, boardId, method }) => {
  const router = useRouter();
  return (
    <section id={"likes"}>
      <BoardLikesWrapper>
        <Image
          src={hasLike ? CommentHasUpButton : CommentUpButton}
          alt="올리기"
          onClick={() => {
            {
              method === ""
                ? putLike(boardId)
                    .then((response) => {
                      console.log(response);
                      router.reload();
                      alert("완료되었습니다.");
                    })
                    .catch((error) => console.log(error))
                : putAnswerLike(boardId)
                    .then((response) => {
                      console.log(response);
                      router.reload();
                      alert("완료되었습니다.");
                    })
                    .catch((error) => console.log(error));
            }
          }}
        />
        <BoardLikesCount>{likes}</BoardLikesCount>
        <Image
          src={hasUnLike ? CommentHasDownButton : CommentDownButton}
          alt="올리기"
          onClick={() => {
            {
              method === "answer"
                ? putUnLike(boardId)
                    .then((response) => {
                      console.log(response);
                      router.reload();
                      alert("완료되었습니다.");
                    })
                    .catch((error) => console.log(error))
                : putAnswerUnLike(boardId)
                    .then((response) => {
                      console.log(response);
                      router.reload();
                      alert("완료되었습니다.");
                    })
                    .catch((error) => console.log(error));
            }
          }}
        />

        {isReply ? (
          <CertificateWrapper>
            <Image src={CommentCertiticate} alt="인증" />
          </CertificateWrapper>
        ) : (
          <></>
        )}
      </BoardLikesWrapper>
    </section>
  );
};
export default BoardLikes;
