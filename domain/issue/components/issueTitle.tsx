import React from "react";
import type { NextPage } from "next";
import {
  IssueStatus,
  IssueSubjectText,
  IssueTitleText,
  IssueTitleWrapper,
} from "./issueTitle.style";
import Image from "next/image";
import { OpenIssue } from "../assets";

const IssueTitle: NextPage = () => {
  return (
    <section id={"issueTitle"}>
      <IssueTitleWrapper>
        <IssueStatus>
          <Image src={OpenIssue} alt="열린 이슈" width={36} height={36} />
        </IssueStatus>
        <IssueTitleText>몬스터즈 알려주실분</IssueTitleText>
        <IssueSubjectText>C++</IssueSubjectText>
      </IssueTitleWrapper>
    </section>
  );
};
export default IssueTitle;
