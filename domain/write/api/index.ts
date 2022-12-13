import instance from "../../../lib/instance";
import { DynamicRouteType } from "../../board/interface";
import {
  BoardPostType,
  EditorFormValue,
  ImagePostResponseType,
} from "../interface";

export const postEditorImage = async (
  file: File
): Promise<ImagePostResponseType> => {
  const formData = new FormData();
  formData.append("file", file);
  try {
    const { data } = await instance.post(`/photo`, formData);
    return data;
  } catch (err) {
    throw err;
  }
};

export const postBoard = async (boardData: EditorFormValue) => {
  try {
    const { data } = await instance.post("/question/new", boardData);
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteBoard = async (boardId: number) => {
  try {
    const { data } = await instance.delete(`/question/${boardId}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const putBoard = async (boardId: number, boardData: EditorFormValue) => {
  try {
    const { data } = await instance.put(`/question/${boardId}/edit`, boardData);
    return data;
  } catch (error) {
    throw error;
  }
};

export const handleWrite = async (data: BoardPostType) => {
  postBoard(data)
    .then((_) => {
      alert("작성에 성공했습니다.");
    })
    .catch((_) => {
      alert("작성에 실패하였습니다. \n 잠시 후에 다시 시도해주세요.");
    });
};
