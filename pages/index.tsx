import type { NextPage } from "next";
import MainContainer from "../domain/main/container";
const Main: NextPage = () => {
  return (
    <section id={`main`}>
      <MainContainer />
    </section>
  );
};

export default Main;
