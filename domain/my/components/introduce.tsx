import React from "react";
import type { NextPage } from "next";
import {
  IntroduceButton,
  IntroduceEditWrapper,
  IntroduceInput,
  IntroduceWrapper,
  IntroduceTitle,
  IntroduceTopWrapper,
  IntroduceUserContent,
} from "./introduce.style";
import { UserInfoRightPropsType } from "../interface";
import { onChangeAction } from "../../../util";

const Introduce: NextPage<UserInfoRightPropsType> = ({ moveRef, uRef }) => {
  const [content, setContent] = React.useState<string>("내용이 없습니다.");
  const [isEdit, setIsEdit] = React.useState<boolean>(false);

  return (
    <IntroduceWrapper ref={moveRef}>
      <IntroduceTopWrapper ref={uRef}>
        <IntroduceTitle>소개</IntroduceTitle>

        {isEdit ? (
          <></>
        ) : (
          <IntroduceButton
            onClick={() => {
              setIsEdit(true);
            }}
          >
            수정
          </IntroduceButton>
        )}
      </IntroduceTopWrapper>

      {isEdit ? (
        <IntroduceEditWrapper>
          <IntroduceInput
            value={content}
            onChange={(event) => {
              onChangeAction(event, setContent);
            }}
          />
          <IntroduceButton
            onClick={() => {
              setIsEdit(false);
            }}
          >
            저장
          </IntroduceButton>
        </IntroduceEditWrapper>
      ) : (
        <IntroduceUserContent>{content}</IntroduceUserContent>
      )}
    </IntroduceWrapper>
  );
};
export default Introduce;
