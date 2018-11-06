import { httpPost } from "../utilities";

export const registerUser = (data) => {
  return dispatch => {
    dispatch({ type: "POSTING_USER" });
    return httpPost('/api/v1/register', data)
      .then(json => {
        // if an error is returned, we add
        // that error to the user store
        if (json.error) {
          dispatch({
            type: "ADD_USER_ERROR",
            error: json.error
          });
        } else {
          // if a user is returned, we add
          // that user to the user store 
          // and store the JWT in localStorage
          dispatch({
            type: "ADD_USER",
            user: json.user
          });
          localStorage.setItem('phoenixAuthToken', json.jwt);
        }
      });
  }
}