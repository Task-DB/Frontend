import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { Comments } from "../assets";
import {
  IssueComments,
  IssueCreatedAt,
  IssueLikes,
  IssueNumber,
  IssueStatusBottomWrapper,
  IssueStatusWrapper,
} from "./issueStatus.style";
import { IndividualIssueType } from "../interface";
import { getRelativeDate } from "../../../util";

const IssueStatus: NextPage<{ issueData: IndividualIssueType }> = ({
  issueData,
}) => {
  return (
    <section id={"issueStatus"}>
      <IssueStatusWrapper>
        <IssueStatusBottomWrapper>
          <IssueNumber>#{issueData.id}</IssueNumber>
          <IssueComments>
            <Image src={Comments} alt="댓글수" width={21} height={21} />
            <span>{issueData.commentCount}</span>
          </IssueComments>
          <IssueLikes>
            ❤<span>{issueData.likeCount}</span>
          </IssueLikes>
        </IssueStatusBottomWrapper>
        <IssueCreatedAt>{getRelativeDate(issueData.createdDate)}</IssueCreatedAt>
      </IssueStatusWrapper>
    </section>
  );
};
export default IssueStatus;
