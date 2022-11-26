import React from "react";
import type { NextPage } from "next";
import { SelectorElement, SelectorWrapper } from "./subjectSelector.style";
import { SubjectListType } from "../interface";
import { handleSubjectClick } from "../util";

const SubjectSelector: NextPage = () => {
  const [subjectList, setSubjectList] = React.useState<SubjectListType[]>([
    {
      subjectName: "Java",
      isSelect: false,
    },
    {
      subjectName: "C++",
      isSelect: false,
    },
    {
      subjectName: "DB",
      isSelect: false,
    },
    {
      subjectName: "정처기",
      isSelect: false,
    },
  ]);

  return (
    <section id={"subject-selector"} style={{ marginTop: "2rem" }}>
      <SelectorWrapper>
        {subjectList.map((data, idx) => {
          return (
            <SelectorElement
              key={idx}
              isSelect={data.isSelect}
              onClick={() => {
                handleSubjectClick(idx, setSubjectList);
              }}
            >
              {data.subjectName}
            </SelectorElement>
          );
        })}
      </SelectorWrapper>
    </section>
  );
};
export default SubjectSelector;
