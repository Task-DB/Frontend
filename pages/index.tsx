import type { NextPage } from "next";
import MainContainer from "../domain/main/container";

import React from "react";

const Main: NextPage = () => {
  
  return (
    <section id={`main`}>
      <MainContainer />
    </section>
  );
};

export default Main;
