import React from "react";
import type { NextPage } from "next";
import {
  UserWrapper,
  UserBio,
  UserGrade,
  UserName,
  UserProfile,
  UserScore,
  UserReplyCount,
  UserInfoExplain,
} from "./rankElement.style";
import Image from "next/image";

const RankElement: NextPage<{ userData: any }> = ({ userData }) => {
  // TODO 테이블로 변경하기
  return (
    <UserWrapper>
      <UserInfoExplain top="-16px" left="55%">
        소개
      </UserInfoExplain>
      <UserGrade>
        <UserInfoExplain top="-40px" left="1px">
          순위
        </UserInfoExplain>
        {userData.grade}
      </UserGrade>
      <UserProfile>
        <UserInfoExplain top="-36px" left="50%">
          닉네임
        </UserInfoExplain>
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
      <UserReplyCount>
        <UserInfoExplain top="-50px" left="5px">
          답변
        </UserInfoExplain>
        {userData.replyCount}
      </UserReplyCount>
      <UserScore>
        <UserInfoExplain top="-60px" left="5px">
          점수
        </UserInfoExplain>
        {userData.score}
      </UserScore>
    </UserWrapper>
  );
};
export default RankElement;
