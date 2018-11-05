export default function userReducer(state = defaultState, action) {
  switch (action.type) {
    case "ADD_USER":
      return state;

    default:
      return state;
  }
}

const defaultState = {
  id: null,
  name: null,
  email: null
}

/**
 * This will be the area in the store where we keep our logged-in
 * user. This will populate upon successful login and reset to 
 * defaultState upon logging out. Entire Redux store will reset
 * to respective defaultState upon logging out as well.
 */