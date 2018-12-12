export default function userReducer(state = defaultState, action) {
  switch (action.type) {
    case "ADD_USER":
      return { ...state, requestPending: false, error: null, id: action.user.id, name: action.user.name, email: action.user.email };

    case "ADD_CAFE_USER":
      return {...state, cafeUsers: state.cafeUsers.concat(action.cafeUser)}

    case "LOGOUT":
      return defaultState;

    case "POSTING_USER": 
      return { ...state, requestPending: true, error: null };

    case "ADD_USER_ERROR":
      return { ...state, requestPending: false, error: action.error };

    case "USER_CREATED":
      return { ...state, requestPending: false, userCreated: true };

    case "RESET_USER_CREATED":
      return { ...state, userCreated: false };

    default:
      return state;
  }
}

const defaultState = {
  id: null,
  name: null,
  email: null,
  requestPending: false,
  error: null,
  userCreated: false,
  cafeUsers: []
}

/**
 * This will be the area in the store where we keep our logged-in
 * user. This will populate upon successful login and reset to 
 * defaultState upon logging out. Entire Redux store will reset
 * to respective defaultState upon logging out as well.
 */