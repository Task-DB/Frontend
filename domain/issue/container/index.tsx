import React from "react";
import type { NextPage } from "next";
import IndividualIssue from "../components/indiviualIssue";
import { IssueWrapper } from "./index.style";

const IssueContainer: NextPage = () => {
  return (
    <IssueWrapper>
      <IndividualIssue />
      <IndividualIssue />
      <IndividualIssue />
      <IndividualIssue />
      <IndividualIssue />
      <IndividualIssue />
      <IndividualIssue />
      <IndividualIssue />
    </IssueWrapper>
  );
};
export default IssueContainer;
