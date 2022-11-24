import styled from "styled-components";
import { LinePropsType } from "../interface";


export const BoardContentWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  justify-content: space-evenly;
`;


export const BoardContent = styled.div`
  width: 75%;
`;

export const BoardLine = styled.hr<LinePropsType>`
  width: ${(props) => props.width}%;
  border: 1px solid #eee;
  background-color: #eee;
  margin: 1rem 0;
`;