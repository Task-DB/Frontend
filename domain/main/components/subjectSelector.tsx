import React from "react";
import type { NextPage } from "next";
import { SelectorElement, SelectorProvider } from "./subjectSelector.style";

const SubjectSelector: NextPage = () => {
  return (
    <section
      id={"SubjectSelector"}
      style={{ marginTop: "2rem", marginLeft: "1rem" }}
    >
      <SelectorProvider>
        <SelectorElement>자바</SelectorElement>
        <SelectorElement>자바</SelectorElement>
        <SelectorElement>자​바</SelectorElement>
        <SelectorElement>자바</SelectorElement>
      </SelectorProvider>
    </section>
  );
};
export default SubjectSelector;
