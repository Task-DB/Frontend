import React from "react";
import { ProfilePicture } from "../assets";
import type { NextPage } from "next";
import {
  UserInfoId,
  UserInfoLi,
  UserInfoProfilePicture,
  UserInfoProvider,
  UserInfoUl,
  UserProfileMenu,
  UserProfileUlMenu,
} from "./userInfo.style";

const UserInfo: NextPage = () => {
  return (
    <UserInfoProvider>
      <UserProfileMenu>
        <UserInfoId>J1min</UserInfoId>
        <UserInfoProfilePicture src={ProfilePicture} width={65} height={65} />
      </UserProfileMenu>

      <UserProfileUlMenu>
        <UserInfoUl>
          <UserInfoLi>소개</UserInfoLi>
          <UserInfoLi>정보</UserInfoLi>
          <UserInfoLi>게시글</UserInfoLi>
        </UserInfoUl>
      </UserProfileUlMenu>
    </UserInfoProvider>
  );
};

export default UserInfo;
