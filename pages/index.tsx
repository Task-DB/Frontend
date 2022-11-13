import type { NextPage } from "next";
import IssueContainer from "../domain/issue/container";
const Main: NextPage = () => {
  return (
    <section id={`main`}>
      <IssueContainer />
    </section>
  );
};

export default Main;
