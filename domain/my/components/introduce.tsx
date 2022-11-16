import React from "react";
import type { NextPage } from "next";
import {
  IntroduceButton,
  IntroduceEditProvider,
  IntroduceInput,
  IntroduceProvider,
  IntroduceTitle,
  IntroduceTopProvider,
  IntroduceUserContent,
} from "./introduce.style";
import { UserInfoRightPropsType } from "../interface";
import { onChangeAction } from "../../../util";

const Introduce: NextPage<UserInfoRightPropsType> = ({ moveRef, uRef }) => {
  const [content, setContent] = React.useState<string>("내용이 없습니다.");
  const [isEdit, setIsEdit] = React.useState<boolean>(false);

  return (
    <IntroduceProvider ref={moveRef}>
      <IntroduceTopProvider ref={uRef}>
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
      </IntroduceTopProvider>

      {isEdit ? (
        <IntroduceEditProvider>
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
            화긴
          </IntroduceButton>
        </IntroduceEditProvider>
      ) : (
        <IntroduceUserContent>{content}</IntroduceUserContent>
      )}
    </IntroduceProvider>
  );
};
export default Introduce;
