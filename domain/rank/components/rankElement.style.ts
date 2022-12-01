import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const UserWrapper = styled.tr`
  padding: 0.5rem;
  border-radius: 0.6rem;
`;

export const UserName = styled.h2`
  margin-left: 1rem;
`;

export const UserReplyCount = styled.h2`
  padding: 0.5rem;
`;

export const UserGrade = styled.h1`
  margin: 0;
  text-align: center;
`;

export const UserBio = styled.p`
  width: 40%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0 1rem;
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  span {
    border-radius: 50%;
  }
`;

export const UserScore = styled.h2``;

export const UserElement = styled.td`
  text-align: center;
  display: table-cell;
  border-bottom: 1px solid ${theme.white};
`;
