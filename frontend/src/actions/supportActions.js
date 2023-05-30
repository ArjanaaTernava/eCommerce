import axios from "axios";
import {
  SUBMIT_QUESTION,
  SUBMIT_QUESTION_FAIL,
} from "../constants/supportConstants";

export const submitQuestion = (name, email, question) => async (dispatch) => {
  try {
    const supportData = {
      name: name,
      email: email,
      question: question,
    };

    const { data } = await axios.post("/api/v1/support", supportData);

    dispatch({
      type: SUBMIT_QUESTION,
      payload: data,
    });
  } catch (error) {
    const errorMessage =
      error.response && error.response.data.error
        ? error.response.data.error
        : "Internal server error";

    dispatch({
      type: SUBMIT_QUESTION_FAIL,
      payload: errorMessage,
    });
  }
};
