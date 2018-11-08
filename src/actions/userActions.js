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
          dispatch(addUserError(json.errors));
        } else {
          // if a user is returned, we
          // dispatch an action to set 
          // userCreated => true
          dispatch({
            type: "USER_CREATED"
          });
          // redirect to login page
          dispatch(push('/login'));
        }
      });
  }
}

export const loginUser = (data) => {
  return dispatch => {
    dispatch({ type: "POSTING_USER" });
    return httpPost('/api/v1/login', data)
      .then(json => {
        // if an error is returned, we add
        // that error to the user store
        if (json.errors) {
          dispatch(addUserError(json.errors))
        } else {
          // if a user is returned, we add
          // that user to the store and their
          // JWT to localStorage
          dispatch(addUser(json.data.user));
          localStorage.setItem('phoenixAuthToken', json.data.jwt);
          // redirect to '/cafes'
          dispatch(push('/cafes'));
        }
      })
  }
}

export const resetUserCreated = () => {
  return { type: "RESET_USER_CREATED" }
}

const addUserError = (error) => {
  return { type: "ADD_USER_ERROR", error }
}

const addUser = (user) => {
  return { type: "ADD_USER", user }
}