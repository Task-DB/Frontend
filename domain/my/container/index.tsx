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

  return (
    <UserInfoContainer>
      <UserInfo menus={Array.from(menus)} />

      <UserRightProvider>
        <Introduce moveRef={menus[0].element} />
        <Info moveRef={menus[1].element} />
        <Board moveRef={menus[2].element} />
      </UserRightProvider>
    </UserInfoContainer>
  );
};
export default MyContainer;
