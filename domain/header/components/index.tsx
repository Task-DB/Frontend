import React from "react";
import Image from "next/image";
import type { NextPage } from "next";
import { FullLogo, SearchButtonImage } from "../assets";
import {
  HeaderContainer,
  HeaderLeftContainer,
  HeaderUl,
  HeaderLi,
  HeaderLogin,
  SearchButton,
  SearchInput,
  SearchInputWrapper,
} from "./index.style";
import { onChangeAction } from "../../../util";
import Link from "next/link";
import { handleLogout } from "../util";

const Header: NextPage = () => {
  const [keyword, setKeyWord] = React.useState<string>("");
  const [isLogin, setIsLogin] = React.useState<boolean>(false);
  const [content, setContent] = React.useState([
    {
      text: "랭킹",
      link: "/rank",
      isActive: false,
    },
  ]);

  React.useEffect(() => {
    if (localStorage.getItem("accessToken") != null) {
      setIsLogin(true);
    }
  }, []);

  return (
    <HeaderContainer>
      <HeaderLeftContainer>
        <Link href="/">
          <a>
            <Image src={FullLogo} alt="로고" width={160} height={60} />
          </a>
        </Link>

        <SearchInputWrapper>
          <SearchInput
            onChange={(event) => {
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
        </SearchInputWrapper>

        <HeaderUl>
          {content.map((data, idx) => {
            return (
              <Link key={idx} href={data.link}>
                <a>
                  <HeaderLi>{data.text}</HeaderLi>
                </a>
              </Link>
            );
          })}
        </HeaderUl>
      </HeaderLeftContainer>
      {isLogin ? (
        <HeaderLogin>
          <Link href="/my">
            <a>
              <HeaderLi>내정보</HeaderLi>
            </a>
          </Link>
          <span onClick={handleLogout}>
            <HeaderLi>로그아웃</HeaderLi>
          </span>
        </HeaderLogin>
      ) : (
        <Link href="/login">
          <a>
            <HeaderLogin>로그인</HeaderLogin>
          </a>
        </Link>
      )}
    </HeaderContainer>
  );
};

export default Header;
