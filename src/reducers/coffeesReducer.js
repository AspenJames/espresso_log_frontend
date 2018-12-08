export default function coffeesReducer(state = defaultState, action) {
  switch (action.type) {
    case "ADD_COFFEE": 
      return state;

    case "LOGOUT":
      return defaultState;

    default:
      return state;
  }
}

const defaultState = {
  cafeId: null,
  coffees: []
}

/**
 * cafeId will be the currently selected cafe - '/cafes/:id/coffees'
 * and coffees is an array containing the coffees which exist for 
 * the cafe indicated by cafeId. Elements will have this structure:
 * {
 *  id: coffee.id,
 *  name: coffee.name
 *  //cafeId handled above, not necessary to repeat here.
 * }
 */