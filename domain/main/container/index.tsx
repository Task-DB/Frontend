import React from "react";
import type { NextPage } from "next";
import IssueContainer from "../../issue/container";
import SubjectSelector from "../components/subjectSelector";
import WriteButton from "../components/writeButton";
import { MainWrapper } from "./index.style";
import firebase from "firebase";
import { getToken } from "../util/firebase";
import { postToken } from "../api";

const MainContainer: NextPage = () => {
  React.useEffect(() => {
    const config = {
      apiKey: "AIzaSyBgLr_rRGsbgKeZut1I8XbylTqOjL48w8E",
      authDomain: "taskdb-b4857.firebaseapp.com",
      projectId: "taskdb-b4857",
      storageBucket: "taskdb-b4857.appspot.com",
      messagingSenderId: "154549871574",
      appId: "1:154549871574:web:3b74493fba2d6811b4fa77",
      measurementId: "G-YQCYT69DYM",
    };
    const firebaseMessageToken = async () => {
      if (!firebase.apps.length) {
        firebase.initializeApp(config);
      } else {
        firebase.app();
      }

      const token: string | null = await getToken();
      if (token != localStorage.getItem("fcmToken")) {
        postToken(token!);
        localStorage.setItem("fcmToken", token!);
      }
    };

    firebaseMessageToken();
  }, []);

  return (
    <MainWrapper>
      <SubjectSelector />
      <IssueContainer />
      <WriteButton />
    </MainWrapper>
  );
};
export default MainContainer;
