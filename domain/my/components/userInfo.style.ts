import Image from "next/image";
import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const UserInfoWrapper = styled.div`
  position: fixed;
  top: 100px;
  left: 10px;
  border-right: 1px solid ${theme.white};
  padding: 1rem;
  margin-top: 1rem;
  box-sizing: border-box;
  width: 13rem;
`;

export const UserInfoMenu = styled.div`
  border-bottom: 1px solid ${theme.white};
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
`;

export const UserProfileMenu = styled(UserInfoMenu)`
  justify-content: space-around;
  box-sizing: border-box;
`;

export const UserProfileUlMenu = styled(UserInfoMenu)`
  margin: 0;
  padding: 1rem 2rem;
`;

export const UserInfoId = styled.h2`
  margin-right: 0.5rem;
`;

export const UserInfoProfilePicture = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
`;

export const UserInfoUl = styled.ul`
  padding: 0;
  margin: 0;
`;

export const UserInfoLi = styled.li<{ isTop: boolean }>`
  list-style: none;
  position: relative;
  margin-bottom: 1rem;
  color: ${(props) => (props.isTop ? theme.blue["500"] : "white")};
  transition: all 0.3s;

  &:last-child {
    margin-bottom: 0;
  }
  &::before {
    background-color: ${(props) => (props.isTop ? theme.blue["500"] : "white")};
    content: "";
    position: absolute;
    top: 9px;
    left: -15px;
    display: block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
  }
`;
