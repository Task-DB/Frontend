import React from "react";
import type { NextPage } from "next";
import IssueContainer from "../../issue/container";
import SubjectSelector from "../components/subjectSelector";
import WriteButton from "../components/writeButton";
import { MainWrapper } from "./index.style";

const MainContainer: NextPage = () => {
  return (
    <MainWrapper>
      <SubjectSelector />
      <IssueContainer  />
      <WriteButton />
    </MainWrapper>
  );
};
export default MainContainer;
