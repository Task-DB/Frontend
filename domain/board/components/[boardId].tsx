import React from "react";
import type { NextPage } from "next";
import { IndividualBoardPropsType } from "../interface";
import { IndividualBoardProvider } from "./[boardId].style";

const BoardId: NextPage<IndividualBoardPropsType> = ({ boardId }) => {
  return <IndividualBoardProvider>{boardId}</IndividualBoardProvider>;
};
export default BoardId;
