import React from "react";
import Image from "next/image";
import type { NextPage } from "next";
import { Logo, SearchButtonImage } from "../assets";
import {
  HeaderContainer,
  HeaderLeftContainer,
  HeaderLi,
  HeaderLogin,
  HeaderUl,
  SearchButton,
  SearchInput,
} from "./index.style";
import { onChangeAction } from "../../../util";

const Header: NextPage = () => {
  const [keyword, setKeyWord] = React.useState("");

  return (
    <HeaderContainer>
      <HeaderLeftContainer>
        <Image src={Logo} alt="로고" width={40} height={40} />
        <>
          <SearchInput
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              onChangeAction(event, setKeyWord);
            }}
          />
          <SearchButton>
            <Image
              src={SearchButtonImage}
              alt="검색하기"
              width={24}
              height={24}
            />
          </SearchButton>
        </>

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
