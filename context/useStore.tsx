import create from "zustand";
import useMoveScroll from "../hooks/useMoveScroll";
import { UseStoreType } from "./interface";

const useStore = create<UseStoreType>((set) => ({
  menus: {
    0: useMoveScroll("소개"),
    1: useMoveScroll("정보"),
    2: useMoveScroll("게시글"),
    length: 3,
  },
}));

export default useStore;
