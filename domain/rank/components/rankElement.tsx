import React from "react";
import type { NextPage } from "next";
import {
  UserWrapper,
  UserBio,
  UserGrade,
  UserName,
  UserProfile,
  UserScore,
} from "./rankElement.style";
import Image from "next/image";

const RankElement: NextPage<{ userData: any }> = ({ userData }) => {
  return (
    <UserWrapper>
      <UserGrade>{userData.grade}</UserGrade>
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
      <UserBio>{userData.bio}</UserBio>
      <UserScore>{userData.score}</UserScore>
    </UserWrapper>
  );
};
export default RankElement;
