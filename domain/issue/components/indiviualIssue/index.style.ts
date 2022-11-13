import styled from "styled-components";
import { theme } from "../../../../styles/theme";

export const IssueContainer = styled.div`
  color: ${theme.white};
  border: 1px solid white;
  width: 23rem;
  border-radius: 5px;
  background-color: ${theme.background};
  padding: 1.5rem;
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
  font-size: 30px;
  margin-top: 1rem;
`;

export const IssueBottomCommentsContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div span {
    margin-left: 0.3rem;
  }
`;

export const IssueStatus = styled.div``;

export const IssueTitle = styled.h2`
  margin: 0;
`;

export const IssueSubject = styled.span`
  background-color: ${theme.skyblue["900"]};
  padding: 7px;
  box-sizing: border-box;
  border-radius: 5px;
`;

export const IssueNumber = styled.div``;

export const IssueComments = styled.div`
  display: flex;
  align-items: center;
`;

export const IssueLikes = styled.div``;

export const IssueCreatedAt = styled.div`
  font-size: 24px;
`;
