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

//grade: 1,
// name: "J1min",
// profile:
//   "https://avatars.githubusercontent.com/u/80014454?s=400&u=697229e95f7d992ec544f660b009decf907ac4d6&v=4",
// bio: "어어어어어어어어어어어어어어어어어어어어어어어어어",
// score: 100,
// replyCount: 10,

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
        <UserReplyCount>{userData.replyCount}</UserReplyCount>
      </UserElement>

      <UserElement>
        <UserScore>{userData.score}</UserScore>
      </UserElement>
    </UserWrapper>
  );
};
export default RankElement;
