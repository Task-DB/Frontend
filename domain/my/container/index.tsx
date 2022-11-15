import React from "react";
import type { NextPage } from "next";
import UserInfo from "../components/userInfo";
import { UserInfoContainer, UserRightProvider } from "./index.style";
import Introduce from "../components/introduce";
import Info from "../components/info";
import Board from "../components/board";

const MyContainer: NextPage = () => {
  return (
    <UserInfoContainer>
      <UserInfo />
      <UserRightProvider>
        <Introduce />
        <Info />
        <Board />
      </UserRightProvider>
    </UserInfoContainer>
  );
};
export default MyContainer;
