import styled from "styled-components";
import { theme } from "../../../styles/theme";
import { LinePropsType } from "../interface";

export const Content = styled.div`
  width: 75%;
`;

export const ReplyContentWrapper = styled.div``;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  justify-content: space-evenly;
`;

export const ContentText = styled.div`
  margin-top: 1rem;
`;

export const Line = styled.hr<LinePropsType>`
  width: ${(props) => props.width}%;
  border: 1px solid ${theme.white};
  background-color: ${theme.white};
  margin: 1rem 0;
`;

export const ReplyCount = styled.span`
  font-size: 1.5rem;
`;

export const ReplyWrapper = styled.div`
  margin-top: 3rem;
`;
