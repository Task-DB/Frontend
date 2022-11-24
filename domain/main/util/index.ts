import React from "react";
import { SubjectListType } from "../interface";

export const handleSubjectClick = (
  idx: number,
  setSubjectList: React.Dispatch<React.SetStateAction<SubjectListType[]>>
) => {
  setSubjectList((prev) => {
    for (let i = 0; i < prev.length; i++) {
      prev[i].isSelect = false;
    }
    prev[idx].isSelect = true;
    return [...prev];
  });
};
