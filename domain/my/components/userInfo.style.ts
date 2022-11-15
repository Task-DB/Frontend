import Image from "next/image";
import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const UserInfoProvider = styled.div`
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
  padding: 1rem;
`;

export const UserProfileMenu = styled(UserInfoMenu)`
  justify-content: space-around;
`;

export const UserProfileUlMenu = styled(UserInfoMenu)`
  margin: 0;
  padding: 1rem 2rem;
`;

export const UserInfoId = styled.h2``;

export const UserInfoProfilePicture = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
`;

export const UserInfoUl = styled.ul`
  padding: 0;
  margin: 0;
`;

export const UserInfoLi = styled.li`
  list-style: none;
  position: relative;
  margin-bottom: 1rem;
  &:last-child {
    margin-bottom: 0;
  }
  &::before {
    background-color: #00c471;
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