import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const UserWrapper = styled.tr`
  margin: 1.5rem auto;
  padding: 0.5rem;
  border-radius: 0.6rem;
  border: 2px solid ${theme.white};
`;

export const UserName = styled.h2`
  margin-left: 1rem;
`;

export const UserReplyCount = styled.h2`
  margin-left: 1rem;
  padding: 0.5rem;
`;

export const UserGrade = styled.h1`
  padding: 0.7rem;
  margin: 0;
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
  justify-content: center;
  span {
    border-radius: 50%;
  }
`;

export const UserScore = styled.h2``;

export const UserElement = styled.td`
  text-align: center;
  display: table-cell;
  border-bottom: 1px solid #2c3640;
`;
