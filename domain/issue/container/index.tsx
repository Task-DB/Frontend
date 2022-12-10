import React from "react";
import type { NextPage } from "next";
import { IssueWrapper } from "./index.style";
import IndividualIssue from "../components/indiviualIssue";
import { getAllIssueData } from "../api";
import useStore from "../../../context/useStore";
const IssueContainer: NextPage = () => {
  const { allIssueData, setAllIssueData } = useStore();

  React.useEffect(() => {
    getAllIssueData().then((response) => {
      setAllIssueData(response);
    });
  }, [setAllIssueData]);

  React.useEffect(() => {
    console.log(allIssueData);
  }, [allIssueData]);

  return (
    <IssueWrapper>
      {allIssueData?.map((data, idx) => {
        return <IndividualIssue key={idx} issueData={data} />;
      })}
      {allIssueData?.length === 0 ? "게시글이 없습니다!" : ""}
    </IssueWrapper>
  );
};
export default IssueContainer;
