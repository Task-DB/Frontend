import React from "react";
import type { NextPage } from "next";
import {
  IntroduceButton,
  IntroduceProvider,
  IntroduceTitle,
  IntroduceTopProvider,
  IntroduceUserContent,
} from "./introduce.style";

const Introduce: NextPage<{ moveRef: React.RefObject<HTMLDivElement> }> = ({
  moveRef,
}) => {
  return (
    <IntroduceProvider ref={moveRef}>
      <IntroduceTopProvider>
        <IntroduceTitle>소개</IntroduceTitle>
        <IntroduceButton>수정</IntroduceButton>
      </IntroduceTopProvider>
      <IntroduceUserContent>내용이 없습니다.</IntroduceUserContent>
    </IntroduceProvider>
  );
};
export default Introduce;
