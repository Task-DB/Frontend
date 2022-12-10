import React from "react";
import type { AppProps } from "next/app";
import { theme } from "../styles/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/globalStyle";
import Header from "../domain/header/components";
import { UserStyle } from "../styles/userStyle";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <UserStyle />
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
