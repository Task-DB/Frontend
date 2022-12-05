import React from "react";
import type { NextPage } from "next";
import { InfoWrapper, InfoTitle, InfoUserContent } from "./myBoard.style";
import { UserInfoRightPropsType } from "../interface";

const Info: NextPage<UserInfoRightPropsType> = ({
  moveRef,
  uRef,
  myQuestionData,
}) => {
  return (
    <InfoWrapper ref={moveRef}>
      <div ref={uRef}>
        <InfoTitle>내가 쓴 글</InfoTitle>
        <InfoUserContent>
          <div>내용이 없습니다.</div>
          <div>내용이 없습니다.</div>
          <div>내용이 없습니다.</div>
          <div>내용이 없습니다.</div>
          <div>내용이 없습니다.</div>
          <div>내용이 없습니다.</div>
          <div>내용이 없습니다.</div>
          <div>내용이 없습니다.</div>
          <div>내용이 없습니다.</div>
          <div>내용이 없습니다.</div>
          <div>내용이 없습니다.</div>
          <div>내용이 없습니다.</div>
          <div>내용이 없습니다.</div>
          <div>내용이 없습니다.</div>
          <div>내용이 없습니다.</div>
          <div>내용이 없습니다.</div>
          <div>내용이 없습니다.</div>
          <div>내용이 없습니다.</div>
          <div>내용이 없습니다.</div>
          <div>내용이 없습니다.</div>
          <div>내용이 없습니다.</div>
          <div>내용이 없습니다.</div>
          <div>내용이 없습니다.</div>
          <div>내용이 없습니다.</div>
          <div>내용이 없습니다.</div>
          <div>내용이 없습니다.</div>
          <div>내용이 없습니다.</div>
          <div>내용이 없습니다.</div>
          <div>내용이 없습니다.</div>
          <div>내용이 없습니다.</div>
          <div>내용이 없습니다.</div>
          <div>내용이 없습니다.</div>
          <div>내용이 없습니다.</div>
          <div>내용이 없습니다.</div>
          <div>내용이 없습니다.</div>
          <div>내용이 없습니다.</div>
          <div>내용이 없습니다.</div>
          <div>내용이 없습니다.</div>
          <div>내용이 없습니다.</div>
          <div>내용이 없습니다.</div>
          <div>내용이 없습니다.</div>
          <div>내용이 없습니다.</div>
        </InfoUserContent>
      </div>
    </InfoWrapper>
  );
};
export default Info;
