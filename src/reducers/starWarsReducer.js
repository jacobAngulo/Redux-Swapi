import { IS_FETCHING, REQUEST_SUCCESS, REQUEST_ERROR } from "../actions";
const initialState = {
  characters: [],
  fetching: false,
  error: null

  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_FETCHING:
      return {
        ...state,
        fetching: true
      };
    case REQUEST_SUCCESS:
      return {
        ...state,
        fetching: false,
        characters: action.payload
      };
    case REQUEST_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
