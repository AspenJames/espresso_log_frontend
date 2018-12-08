export default function espressosReducer(state = defaultState, action) {
  switch (action.type) {
    case "ADD_ESPRESSO":
      return state;

    case "LOGOUT":
      return defaultState;

    default: 
      return state;
  }
}

const defaultState = {
  coffeeId: null,
  espressos: []
}

/**
 * coffeeId will be the currently selected coffee - '.../coffees/:id/espressos'
 * and espressos is an array containing all espressos 
 * that exist for the coffee indicated by coffeeId.
 * Elements will have the following structure: 
 * {
 *  id: espresso.id,
 *  dose: espresso.dose,
 *  yield: espresso.yield,
 *  time: espresso.time, 
 *  days_off_roast: espresso.days...,
 *  notes: espresso.notes,
 *  userId: espresso.userId,
 *  // coffeeId handled above, no need to repeat
 * }
 */