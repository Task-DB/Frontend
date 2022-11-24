import React from "react";
import type { NextPage } from "next";
import { InfoProvider, InfoTitle, InfoUserContent } from "./myBoard.style";
import { UserInfoRightPropsType } from "../interface";

const Info: NextPage<UserInfoRightPropsType> = ({ moveRef, uRef }) => {
  return (
    <InfoProvider ref={moveRef}>
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
    </InfoProvider>
  );
};
export default Info;
