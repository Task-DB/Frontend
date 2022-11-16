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
  SearchInputProvider,
} from "./index.style";
import { onChangeAction } from "../../../util";
import Link from "next/link";

const Header: NextPage = () => {
  const [keyword, setKeyWord] = React.useState<string>("");

  return (
    <HeaderContainer>
      <HeaderLeftContainer>
        <Link href="/">
          <>
            <Image src={Logo} alt="로고" width={50} height={50} />
          </>
        </Link>

        <SearchInputProvider>
          <SearchInput
            onChange={(
              event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => {
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
        </SearchInputProvider>

        <HeaderUl>
          {["학년별", "좋아요순", "랭킹"].map((data, idx) => {
            return (
              <Link key={idx} href="/">
                <HeaderLi>{data}</HeaderLi>
              </Link>
            );
          })}
        </HeaderUl>
      </HeaderLeftContainer>
      <Link href="/my">
        <HeaderLogin>로그인</HeaderLogin>
      </Link>
    </HeaderContainer>
  );
};

export default Header;
