import React from "react";
import type { NextPage } from "next";
import IssueContainer from "../../issue/container";
import SubjectSelector from "../components/subjectSelector";
import WriteButton from "../components/writeButton";

const MainContainer: NextPage = () => {
  return (
    <>
      <SubjectSelector />
      <IssueContainer />
      <WriteButton />
    </>
  );
};
export default MainContainer;
