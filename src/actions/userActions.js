import { push } from 'connected-react-router';

import { httpPost } from "../utilities";

export const registerUser = (data) => {
  return dispatch => {
    dispatch({ type: "POSTING_USER" });
    return httpPost('/api/v1/users', data)
      .then(json => {
        // if an error is returned, we add
        // that error to the user store
        if (json.errors) {
          dispatch({
            type: "ADD_USER_ERROR",
            error: json.errors
          });
        } else {
          // if a user is returned, we add
          // dispatch an action to set 
          // userCreated => true
          dispatch({
            type: "USER_CREATED"
          });
          dispatch(push('/login'));
        }
      });
  }
}

export const resetUserCreated = () => {
  return { type: "RESET_USER_CREATED" }
}