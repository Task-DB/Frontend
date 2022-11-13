import React from "react";
import type { NextPage } from "next";
import {
  IssueBottomCommentsContainer,
  IssueBottomContainer,
  IssueComments,
  IssueContainer,
  IssueCreatedAt,
  IssueLikes,
  IssueNumber,
  IssueStatus,
  IssueSubject,
  IssueTitle,
  IssueTopContainer,
} from "./index.style";
import Image from "next/image";
import { Comments, OpenIssue } from "../../assets";

const IndividualIssue: NextPage = () => {
  return (
    <IssueContainer>
      <IssueTopContainer>
        <IssueStatus>
          <Image src={OpenIssue} alt="열린 이슈" />
        </IssueStatus>
        <IssueTitle>몬스터즈 알려주실분</IssueTitle>
        <IssueSubject>C++</IssueSubject>
      </IssueTopContainer>

      <IssueBottomContainer>
        <IssueBottomCommentsContainer>
          <IssueNumber>#44</IssueNumber>
          <IssueComments>
            <Image src={Comments} alt="댓글수" />
            <span>3</span>
          </IssueComments>
          <IssueLikes>
            ❤<span>3</span>
          </IssueLikes>
        </IssueBottomCommentsContainer>

        <IssueCreatedAt>어제</IssueCreatedAt>
      </IssueBottomContainer>
    </IssueContainer>
  );
};
export default IndividualIssue;
