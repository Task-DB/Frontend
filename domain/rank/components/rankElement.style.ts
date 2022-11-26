import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const UserWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-evenly;
  border: 2px solid ${theme.white};
  box-sizing: border-box;
  width: 90%;
  margin: 1.5rem auto;
  padding: 0.5rem;
  border-radius: 0.6rem;
`;

export const UserName = styled.h2`
  position: relative;
  margin-left: 1rem;
`;

export const UserReplyCount = styled.h2`
  position: relative;
  margin-left: 1rem;
  padding: 0.5rem;
`;

export const UserGrade = styled.h1`
  position: relative;
  padding: 0.7rem;
  margin: 0;
`;

export const UserBio = styled.p`
  position: relative;
  width: 40%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0 1rem;
`;

export const UserProfile = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  span {
    border-radius: 50%;
  }
`;

export const UserScore = styled.h2`
  position: relative;
`;

export const UserInfoExplain = styled.p<{ top: string; left: string }>`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  margin: 0;
  padding: 0.2rem;
  font-size: 1rem;
  font-weight: 400;
  background-color: ${theme.background};
`;
