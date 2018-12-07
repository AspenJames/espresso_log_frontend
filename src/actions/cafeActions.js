// import { push } from 'connected-react-router';

import { httpPost } from "../utilities";

export const postCafe = (cafe) => {
  return dispatch => {
    dispatch({type: "POSTING_CAFE"});
    return httpPost('/api/v1/cafes', cafe)
      .then(json => {
        if (json.data) {
          dispatch(addCafe(json.data));
        } else {
          dispatch(addError(json.error));
        }
      });
  }
}

export const resetCafeErrors = () => {
  return {type: "RESET_CAFE_ERRORS"}
}

const addCafe = (cafe) => {
  return {type: "ADD_CAFE", cafe};
}

const addError = (error) => {
  return {type: "ADD_CAFE_ERROR", error}
}