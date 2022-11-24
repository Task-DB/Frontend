import React from "react";
import type { NextPage } from "next";
import { IssueWrapper } from "./index.style";
import IndividualIssue from "../components/indiviualIssue";

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
