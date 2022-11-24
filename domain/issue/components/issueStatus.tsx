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

const IssueStatus: NextPage = () => {
  return (
    <section id={"issueStatus"}>
      <IssueStatusWrapper>
        <IssueStatusBottomWrapper>
          <IssueNumber>#44</IssueNumber>
          <IssueComments>
            <Image src={Comments} alt="댓글수" width={21} height={21} />
            <span>3</span>
          </IssueComments>
          <IssueLikes>
            ❤<span>3</span>
          </IssueLikes>
        </IssueStatusBottomWrapper>
        <IssueCreatedAt>어제</IssueCreatedAt>
      </IssueStatusWrapper>
    </section>
  );
};
export default IssueStatus;
