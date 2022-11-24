import React from "react";
import type { NextPage } from "next";
import { AuthorNickname, AuthorWrapper } from "./author.style";
import Image from "next/image";
import { AuthorPropsType } from "../interface";

const Author: NextPage<AuthorPropsType> = ({ profilePicture, nickname }) => {
  return (
    <section id={"author"}>
      <AuthorWrapper>
        <Image
          src={profilePicture}
          width={40}
          height={40}
          objectFit="cover"
          alt={""}
          layout="fixed"
        />
        <AuthorNickname>{nickname}</AuthorNickname>
      </AuthorWrapper>
    </section>
  );
};
export default Author;
