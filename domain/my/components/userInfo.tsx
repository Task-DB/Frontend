import React from "react";
import { ProfilePicture } from "../assets";
import type { NextPage } from "next";
import {
  UserInfoId,
  UserInfoLi,
  UserInfoProfilePicture,
  UserInfoWrapper,
  UserInfoUl,
  UserProfileMenu,
  UserProfileUlMenu,
} from "./userInfo.style";
import { UserInfoMenuType } from "../interface";
import useStore from "../../../context/useStore";

const UserInfo: NextPage<{
  menus: UserInfoMenuType[];
  userName?: string;
  userProfile?: string;
}> = ({ menus, userName, userProfile }) => {
  const { activeList } = useStore();

  return (
    <UserInfoWrapper>
      <UserProfileMenu>
        <UserInfoId>{userName}</UserInfoId>
        <UserInfoProfilePicture src={ProfilePicture} width={65} height={65} />
      </UserProfileMenu>

      <UserProfileUlMenu>
        <UserInfoUl>
          {menus.map((tab: UserInfoMenuType, idx) => {
            return (
              <UserInfoLi
                key={idx}
                onClick={() => {
                  tab.onMoveToElement();
                }}
                isTop={activeList[idx]}
              >
                {tab.namae.name}
              </UserInfoLi>
            );
          })}
        </UserInfoUl>
      </UserProfileUlMenu>
    </UserInfoWrapper>
  );
};

export default UserInfo;
