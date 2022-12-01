import instance from "../../../lib/instance";
import { EditorFormValue, ImagePostResponseType } from "../interface";

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
