import React from "react";
import { getCategoryProblemData } from "../api";
import { SubjectListType } from "../interface";

export const handleSubjectClick = (
  idx: number,
  setSubjectList: React.Dispatch<React.SetStateAction<SubjectListType[]>>,
  data: SubjectListType,
  setAllIssueData: any
) => {
  setSubjectList((prev) => {
    for (let i = 0; i < prev.length; i++) prev[i].isSelect = false;
    prev[idx].isSelect = true;
    return [...prev];
  });

  getCategoryProblemData(data.param)
    .then((response) => {
      console.log(response);
      setAllIssueData(response?.questions);
    })
    .catch((error) => {
      console.log(error);
    });
};
