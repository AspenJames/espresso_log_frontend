export default function cafesReducer(state = defaultState, action) {
  switch (action.type) {
    case "ADD_CAFE":
      return state;

    default: 
      return state;
  }
}

const defaultState = {
  cafes: []
}

/**
 * Cafes is an array that contains all of the cafes to which 
 * the logged-in user is a member. Individual elements of this
 * array will have the following structure: 
 * {
 *  id: cafe.id,
 *  name: cafe.name,
 *  address: cafe.address,
 *  approved: t/f - from Cafe_users join table
 *  admin: t/f - from Cafe_users join table
 * }
 */