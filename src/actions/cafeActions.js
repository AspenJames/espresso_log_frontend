import { push } from 'connected-react-router';

import { httpPost } from "../utilities";

export const addCafe = (cafe) => {
  return dispatch => {
    dispatch({type: "POSTING_CAFE"});
    return httpPost('/api/v1/cafes', cafe)
      .then(json => {
        console.log(json)
      });
  }
}