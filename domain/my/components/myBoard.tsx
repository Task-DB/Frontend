import React from "react";
import type { NextPage } from "next";
import { InfoWrapper, InfoTitle, InfoUserContent } from "./myBoard.style";
import { UserInfoRightPropsType } from "../interface";

const Info: NextPage<UserInfoRightPropsType> = ({
  moveRef,
  uRef,
  myQuestionData,
}) => {
  React.useEffect(() => {
    console.log(myQuestionData != null);
    if (myQuestionData) {
      console.log("dd");
    }
    console.log(myQuestionData?.length);

    console.log(myQuestionData);
  }, [myQuestionData]);
  return (
    <InfoWrapper ref={moveRef}>
      <div ref={uRef}>
        <InfoTitle>내가 쓴 글</InfoTitle>
        <InfoUserContent>
          {myQuestionData?.map((data, idx) => {
            return <div key={idx}>{data.title}</div>;
          })}
          {myQuestionData ? "내가 쓴 글이 없습니다." : ""}
        </InfoUserContent>
      </div>
    </InfoWrapper>
  );
};
export default Info;
