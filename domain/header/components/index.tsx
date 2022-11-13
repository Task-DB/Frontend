import React from "react";
import Image from "next/image";
import type { NextPage } from "next";
import { Logo } from "../assets";
import {
  HeaderContainer,
  HeaderLeftContainer,
  HeaderLi,
  HeaderLogin,
  HeaderUl,
  SearchInput,
} from "./index.style";
import { onChangeAction } from "../../../util";

const Header: NextPage = () => {
  const [keyword, setKeyWord] = React.useState("");

  return (
    <HeaderContainer>
      <HeaderLeftContainer>
        <Image src={Logo} alt="" width={45} height={45} />
        <SearchInput
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            onChangeAction(event, setKeyWord);
          }}
        />
        <HeaderUl>
          <HeaderLi>학년별</HeaderLi>
          <HeaderLi>좋아요순</HeaderLi>
          <HeaderLi>랭킹</HeaderLi>
        </HeaderUl>
      </HeaderLeftContainer>
      <HeaderLogin>로그인</HeaderLogin>
    </HeaderContainer>
  );
};

export default Header;
