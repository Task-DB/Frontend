import styled from "styled-components";
import { theme } from "../../../../styles/theme";

export const IssueContainer = styled.div`
  color: ${theme.white};
  border: 1px solid white;
  width: 16rem;
  border-radius: 5px;
  background-color: ${theme.background};
  padding: 1rem;
  box-sizing: border-box;
`;

export const IssueTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IssueBottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

export const IssueBottomCommentsContainer = styled.div`
  width: 55%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div span {
    margin-left: 0.3rem;
  }
`;

export const IssueStatus = styled.div``;

export const IssueTitle = styled.h3`
  margin: 0;
  font-size: 22px;
`;

export const IssueSubject = styled.span`
  background-color: ${theme.skyblue["900"]};
  padding: 0.3rem;
  font-size: 0.6rem;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid white;
`;

export const IssueNumber = styled.div``;

export const IssueComments = styled.div`
  display: flex;
  align-items: center;
`;

export const IssueLikes = styled.div``;

export const IssueCreatedAt = styled.div`
  font-size: 14px;
`;
