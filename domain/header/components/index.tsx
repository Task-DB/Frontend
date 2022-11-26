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
  SearchInputWrapper,
} from "./index.style";
import { onChangeAction } from "../../../util";
import Link from "next/link";

const Header: NextPage = () => {
  const [keyword, setKeyWord] = React.useState<string>("");
  const [content, setContent] = React.useState([
    {
      text: "학년별",
      link: "/grade",
    },
    {
      text: "좋아요순",
      link: "/like",
    },
    {
      text: "랭킹",
      link: "/rank",
    },
  ]);
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
      <Link href="/my">
        <a>
          <HeaderLogin>로그인</HeaderLogin>
        </a>
      </Link>
    </HeaderContainer>
  );
};

export default Header;
