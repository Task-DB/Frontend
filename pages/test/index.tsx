import React from "react";
import type { NextPage } from "next";
import axios from "axios";

const Test: NextPage = () => {
  const data = { email: "202110415@bssm.hs.kr" };

  var config = {
    method: "post",
    url: "http://192.168.10.103:8092/email/join",
    headers: {},
    data: data,
  };

  axios(config)
    .then((response) => {
      console.log(response.data);
      console.log(response.data);
      console.log(response.data);
      console.log(response.data);
      console.log(response.data);
      console.log(response.data);
      console.log(response.data);
      console.log(response.data);
      console.log(response.data);
      console.log(response.data);
      console.log(response.data);
      console.log(response.data);
      console.log(response.data);
      console.log(response.data);
      console.log(response.data);
      console.log(response.data);
      console.log(response.data);
      console.log(response.data);
      console.log("------------");
    })
    .catch((error) => {
      console.log(error);
    });
  return <>Test</>;
};
export default Test;
