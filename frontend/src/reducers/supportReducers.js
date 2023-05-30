import {
  SUBMIT_QUESTION,
  SUBMIT_QUESTION_FAIL,
} from "../constants/supportConstants";

export const supportReducer = (
  state = { question: null, error: null },
  action
) => {
  switch (action.type) {
    case SUBMIT_QUESTION:
      return {
        ...state,
        question: action.payload,
        error: null,
      };

    case SUBMIT_QUESTION_FAIL:
      return {
        ...state,
        question: null,
        error: action.payload,
      };

    default:
      return state;
  }
};
