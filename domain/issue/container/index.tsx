import React from "react";
import type { NextPage } from "next";
import { IssueWrapper } from "./index.style";
import IndividualIssue from "../components/indiviualIssue";
import { getAllIssueData } from "../api";
import { IndividualIssueType } from "../interface";
const IssueContainer: NextPage = () => {
  const [allIssueData, setAllIssueData] = React.useState<IndividualIssueType[]>(
    []
  );

  React.useEffect(() => {
    getAllIssueData().then((response) => {
      setAllIssueData(response);
    });
  }, []);

  return (
    <IssueWrapper>
      {allIssueData?.map((data, idx) => {
        return <IndividualIssue key={idx} issueData={data} />;
      })}
      {!allIssueData ? "게시글을 볼 권한이 없습니다!" : ""}
    </IssueWrapper>
  );
};
export default IssueContainer;
