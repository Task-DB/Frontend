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
      param: "/categories?c=JAVA",
    },
    {
      subjectName: "C++",
      isSelect: false,
      param: "/categories?c=JAVA",
    },
    {
      subjectName: "DB",
      isSelect: false,
      param: "/categories?c=JAVA",
    },
    {
      subjectName: "정처기",
      isSelect: false,
      param: "/categories?c=JAVA",
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
