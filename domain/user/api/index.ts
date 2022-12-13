import React from "react";
import instance from "../../../lib/instance";
import { DynamicRouteType } from "../../board/interface";
import { MyType } from "../../my/interface";

export const getAnotherUserData = async (userId: DynamicRouteType) => {
  try {
    const { data } = await instance.get(`/user/${userId}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const handleAnotherUserData = (
  userId: DynamicRouteType,
  setMyData: React.Dispatch<React.SetStateAction<MyType | undefined>>
) => {
  getAnotherUserData(userId)
    .then((response) => {
      setMyData(response);
    })
    .catch((_) => {
      alert("유저가 없어요..");
      location.href = "/";
    });
};
