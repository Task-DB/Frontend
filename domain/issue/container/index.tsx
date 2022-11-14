import React from "react";
import type { NextPage } from "next";
import IndividualIssue from "../components/indiviualIssue";
import { IssueProvider } from "./index.style";

const IssueContainer: NextPage = () => {
  return (
    <IssueProvider>
      <IndividualIssue />
      <IndividualIssue />
      <IndividualIssue />
      <IndividualIssue />
      <IndividualIssue />
      <IndividualIssue />
      <IndividualIssue />
      <IndividualIssue />
    </IssueProvider>
  );
};
export default IssueContainer;
