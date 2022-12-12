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

const Introduce: NextPage<UserInfoRightPropsType> = ({
  moveRef,
  uRef,
  myIntroduceData,
}) => {
  const [isEdit, setIsEdit] = React.useState<boolean>(false);
  const [bio, setBio] = React.useState<string>("");

  React.useEffect(() => {
    setBio(myIntroduceData!);
  }, [myIntroduceData]);

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
            value={bio}
            onChange={(event) => {
              onChangeAction(event, setBio);
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
        <IntroduceUserContent>
          {myIntroduceData ? myIntroduceData : "소개가 없습니다!"}
        </IntroduceUserContent>
      )}
    </IntroduceWrapper>
  );
};
export default Introduce;
