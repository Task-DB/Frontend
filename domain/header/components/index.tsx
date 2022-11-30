import React from "react";
import Image from "next/image";
import type { NextPage } from "next";
import { Logo, SearchButtonImage } from "../assets";
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
            <Image src={Logo} alt="로고" width={50} height={50} />
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
        <>
          <Link href="/my">
            <a>
              <HeaderLogin>내정보</HeaderLogin>
            </a>
          </Link>
          <Link href="/logout">
            <a>
              <HeaderLogin>로그아웃</HeaderLogin>
            </a>
          </Link>
        </>
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
