import React from "react";
import type { NextPage } from "next";
import {
  IssueStatus,
  IssueSubjectText,
  IssueTitleLeftWrapper,
  IssueTitleText,
  IssueTitleWrapper,
} from "./issueTitle.style";
import Image from "next/image";
import { ClosedIssue, OpenIssue } from "../assets";
import { IndividualIssueType } from "../interface";
import Link from "next/link";

const IssueTitle: NextPage<{ issueData: IndividualIssueType }> = ({
  issueData,
}) => {
  return (
    <section id={"issueTitle"}>
      <IssueTitleWrapper>
        <IssueTitleLeftWrapper>
          <IssueStatus>
            <Image
              src={issueData.status === "OPEN" ? OpenIssue : ClosedIssue}
              alt="열린 이슈"
              width={36}
              height={36}
            />
          </IssueStatus>
          <IssueTitleText>
            <Link href={`/board/${issueData.id}`}>
              <a>{issueData.title}</a>
            </Link>
          </IssueTitleText>
        </IssueTitleLeftWrapper>
        <IssueSubjectText>{issueData.category}</IssueSubjectText>
      </IssueTitleWrapper>
    </section>
  );
};
export default IssueTitle;
