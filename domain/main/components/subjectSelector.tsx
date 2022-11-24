import React from "react";
import type { NextPage } from "next";
import { SelectorElement, SelectorWrapper } from "./subjectSelector.style";

const SubjectSelector: NextPage = () => {
  return (
    <section
      id={"SubjectSelector"}
      style={{ marginTop: "2rem", marginLeft: "1rem" }}
    >
      <SelectorWrapper>
        <SelectorElement>자바</SelectorElement>
        <SelectorElement>자바</SelectorElement>
        <SelectorElement>자​바</SelectorElement>
        <SelectorElement>자바</SelectorElement>
      </SelectorWrapper>
    </section>
  );
};
export default SubjectSelector;
