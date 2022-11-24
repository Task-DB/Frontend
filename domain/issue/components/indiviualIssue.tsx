import React from "react";
import type { NextPage } from "next";
import { IssueContainer } from "./indiviualIssue.style";
import Image from "next/image";
import IssueTitle from "./issueTitle";
import IssueStatus from "./issueStatus";

const IndividualIssue: NextPage = () => {
  return (
    <IssueContainer>
      <IssueTitle />
      <IssueStatus />
    </IssueContainer>
  );                          
};
export default IndividualIssue;
