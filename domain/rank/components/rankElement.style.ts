import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: 2px solid ${theme.white};
  box-sizing: border-box;
  width: 90%;
  margin: 1rem auto;
  border-radius: 0.6rem;
`;
export const UserName = styled.h2`
  margin-left: 1rem;
`;
export const UserGrade = styled.h1``;
export const UserBio = styled.span`
  width: 40%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  span {
    border-radius: 50%;
  }
`;
export const UserScore = styled.h2``;
