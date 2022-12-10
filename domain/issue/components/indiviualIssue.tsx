import React from "react";
import type { NextPage } from "next";
import { IssueContainer } from "./indiviualIssue.style";
import IssueTitle from "./issueTitle";
import IssueStatus from "./issueStatus";
import { IndividualIssueType } from "../interface";

const IndividualIssue: NextPage<{ issueData: IndividualIssueType }> = ({
  issueData,
}) => {
  return (
    <>
      {issueData != null ? (
        <IssueContainer>
          <IssueTitle issueData={issueData} />
          <IssueStatus issueData={issueData} />
        </IssueContainer>
      ) : (
        <></>
      )}
    </>
  );
};
export default IndividualIssue;
