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
import { ProfilePicture } from "../../my/assets";
import { RankDataType } from "../interface";

const RankElement: NextPage<{ userData: RankDataType; rank: number }> = ({
  userData,
  rank,
}) => {
  return (
    <UserWrapper>
      <UserElement>
        <UserGrade>{rank}</UserGrade>
      </UserElement>

      <UserElement>
        <UserProfile>
          <Image
            src={ProfilePicture}
            width={64}
            height={64}
            alt={`${userData.nickname}씨의 프로필`}
            objectFit="cover"
            layout="fixed"
          />
          <UserName>{userData.nickname}</UserName>
        </UserProfile>
      </UserElement>

      <UserElement>
        <UserReplyCount>{userData.answerCount}회</UserReplyCount>
      </UserElement>

      <UserElement>
        <UserScore>{userData.contributionLevel}</UserScore>
      </UserElement>
    </UserWrapper>
  );
};
export default RankElement;
