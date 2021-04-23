import { combineReducers } from "redux";

//Reducer
function ClickMeReducer(
  initialState = { count: 0, currentTime: null, stats: [] },
  action
) {
  switch (action.type) {
    case "CLICKME":
      // Note: return a Object that contain count increment current time and an array of objects
      return {
        ...initialState,
        count: initialState.count + 1,
        currentTime: new Date().toLocaleTimeString(),
        stats: [
          ...initialState.stats,
          { status: `you had clicked at ${new Date().toLocaleTimeString()}` }
        ]
      };

    default:
      return initialState;
  }
}

// Combining all resducers in this case its only one
let Reducer = combineReducers({
  ClickMe: ClickMeReducer
});

export default Reducer;
