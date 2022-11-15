import React from "react";
import type { NextPage } from "next";
import {
  IntroduceButton,
  IntroduceProvider,
  IntroduceTitle,
  IntroduceTopProvider,
  IntroduceUserContent,
} from "./introduce.style";
import { UserInfoRightPropsType } from "../interface";

const Introduce: NextPage<UserInfoRightPropsType> = ({ moveRef, uRef }) => {
  return (
    <IntroduceProvider ref={moveRef}>
      <IntroduceTopProvider ref={uRef}>
        <IntroduceTitle>소개</IntroduceTitle>
        <IntroduceButton>수정</IntroduceButton>
      </IntroduceTopProvider>
      <IntroduceUserContent>내용이 없습니다.</IntroduceUserContent>
    </IntroduceProvider>
  );
};
export default Introduce;
