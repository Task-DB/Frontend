import React from "react";
import type { NextPage } from "next";
import IssueContainer from "../../issue/container";
import SubjectSelector from "../components/subjectSelector";

const MainContainer: NextPage = () => {
  return (
    <section id={`MainPage`}>
      <SubjectSelector />
      <IssueContainer />
    </section>
  );
};
export default MainContainer;
