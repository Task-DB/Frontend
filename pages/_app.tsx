import React from "react";
import type { AppProps } from "next/app";
import { theme } from "../styles/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/globalStyle";
import Header from "../domain/header/components";
import { UserStyle } from "../styles/userStyle";
import firebase from "firebase";
import { getToken } from "../util/firebase";

export default function App({ Component, pageProps }: AppProps) {
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
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    } else {
      firebase.app();
    }
    firebaseMessageToken();
  }, []);
  const firebaseMessageToken = async () => {
    let token = await getToken();
    console.log("token === ", token);
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <UserStyle />
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
