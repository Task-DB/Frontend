import React from "react";
import type { NextPage } from "next";
import UserInfo from "../components/userInfo";
import { UserInfoContainer, UserRightProvider } from "./index.style";
import Introduce from "../components/introduce";
import Info from "../components/info";
import Board from "../components/board";
import useMoveScroll from "../../../hooks/useMoveScroll";
import { UserInfoMenuType } from "../interface";

const MyContainer: NextPage = () => {
  const menus = {
    0: useMoveScroll("소개"),
    1: useMoveScroll("정보"),
    2: useMoveScroll("게시글"),
    length: 3,
  };

  const menuProps: UserInfoMenuType[] = Array.from(menus);

  return (
    <UserInfoContainer>
      <UserInfo menuProps={menuProps} />
      <UserRightProvider>
        <Introduce />
        <Info />
        <Board />
      </UserRightProvider>
    </UserInfoContainer>
  );
};
export default MyContainer;
