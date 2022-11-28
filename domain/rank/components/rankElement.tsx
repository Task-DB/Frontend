import React from "react";
import type { NextPage } from "next";
import {
  UserWrapper,
  UserGrade,
  UserName,
  UserProfile,
  UserScore,
  UserReplyCount,
  UserElement,
} from "./rankElement.style";
import Image from "next/image";

const RankElement: NextPage<{ userData: any }> = ({ userData }) => {
  return (
    <UserWrapper>
      <UserElement>
        <UserGrade>{userData.grade}</UserGrade>
      </UserElement>

      <UserElement>
        <UserProfile>
          <Image
            src={userData.profile}
            width={64}
            height={64}
            alt={`${userData.name}씨의 프로필`}
            objectFit="cover"
            layout="fixed"
          />
          <UserName>{userData.name}</UserName>
        </UserProfile>
      </UserElement>

      <UserElement>
        <UserReplyCount>{userData.replyCount}회</UserReplyCount>
      </UserElement>

      <UserElement>
        <UserScore>{userData.score}</UserScore>
      </UserElement>
    </UserWrapper>
  );
};
export default RankElement;
