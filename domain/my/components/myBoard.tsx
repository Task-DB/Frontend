import React from "react";
import type { NextPage } from "next";
import {
  InfoWrapper,
  InfoTitle,
  InfoUserContent,
  MyQuestionWrapper,
} from "./myBoard.style";
import { UserInfoRightPropsType } from "../interface";
import Link from "next/link";

const Info: NextPage<UserInfoRightPropsType> = ({
  moveRef,
  uRef,
  myQuestionData,
}) => {
  console.log("myQuestionData", myQuestionData);
  return (
    <InfoWrapper ref={moveRef}>
      <div ref={uRef}>
        <InfoTitle>내가 쓴 글</InfoTitle>
        <InfoUserContent>
          {myQuestionData?.map((data, idx) => {
            return (
              <MyQuestionWrapper key={idx}>
                <Link href={`/board/${data.id}`}>
                  <a>{data.title}</a>
                </Link>
              </MyQuestionWrapper>
            );
          })}
          {!myQuestionData ? "쓴 글이 없습니다." : ""}
        </InfoUserContent>
      </div>
    </InfoWrapper>
  );
};
export default Info;
