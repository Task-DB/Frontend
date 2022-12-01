import React from "react";
import type { NextPage } from "next";
import { IssueWrapper } from "./index.style";
import IndividualIssue from "../components/indiviualIssue";
import { getAllIssueData } from "../api";
const IssueContainer: NextPage = () => {
  React.useEffect(() => {
    getAllIssueData().then((response) => {
      console.log(response);
    });
  }, []);
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
