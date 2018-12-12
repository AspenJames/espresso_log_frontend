import { push } from 'connected-react-router';

import { httpPost, httpGet } from "../utilities";

export const postCafe = (cafe) => {
  return dispatch => {
    dispatch(postingCafes());
    return httpPost('/api/v1/cafes', cafe)
      .then(json => {
        if (json.data) {
          dispatch(push(`/cafes/${json.data.id}`));
        } else {
          dispatch(addError(json.errors));
        }
      });
  }
}

export const fetchUserCafes = (userId) => {
  return dispatch => {
    dispatch(postingCafes());
    return httpGet(`/api/v1/users/${userId}/cafes`)
      .then(json => {
        if (json.data) {
          json.data.forEach(cafe => {
            dispatch(addUserCafe(cafe));
          });
        }
      });
  }
}

export const fetchCafes = () => {
  return dispatch => {
    dispatch(postingCafes());
    return httpGet(`/api/v1/cafes`)
      .then(json => {
        if (json.data) {
          json.data.forEach(cafe => dispatch(addCafe(cafe)));
        }
      });
  }
}

export const joinCafe = (data) => {
  return dispatch => {
    return httpPost(`/api/v1/cafe_users`, data)
      .then(resp => {
        const cafeId = resp.data.cafe_id;
        dispatch(addToUserCafes(cafeId));
        dispatch(push(`/cafes/${cafeId}`));
      });
  }
}

export const resetCafeErrors = () => {
  return {type: "RESET_CAFE_ERRORS"}
}

export const resetCafes = () => {
  return {type: "RESET_CAFES"}
}

const postingCafes = () => {
  return {type: "POSTING_CAFE"}
}

const addCafe = (cafe) => {
  return {type: "ADD_CAFE", cafe}
}

const addUserCafe = (cafe) => {
  return {type: "ADD_USER_CAFE", cafe};
}

const addToUserCafes = (cafeId) => {
  return {type: "ADD_TO_USER_CAFES", cafeId}
}

const addError = (error) => {
  return {type: "ADD_CAFE_ERROR", error}
}