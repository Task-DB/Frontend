import React from "react";
import type { NextPage } from "next";
import Image from "next/image";

import {
  CommentCertiticate,
  CommentDownButton,
  CommentUpButton,
} from "../assets";
import {
  BoardLikesCount,
  BoardLikesWrapper,
  CertificateWrapper,
} from "./boardLikes.style";

const BoardLikes: NextPage<{ isReply: boolean; likes: number }> = ({
  isReply,
  likes,
}) => {
  return (
    <section id={"likes"}>
      <BoardLikesWrapper>
        <Image src={CommentUpButton} alt="올리기" />
        <BoardLikesCount>{likes}</BoardLikesCount>
        <Image src={CommentDownButton} alt="내리기" />
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
