import * as types from "../actions";

const initialState = {
  characters: [],
  fetching: false,
  error: null,
  // Array characters, Boolean fetching, null error.
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case types.FETCHING_DATA:
      return ({
        ...state,
        fetching: action.payload,
      });

    case types.LOADED_SUCCESSFULLY:
      return ({
        ...state,
        characters: action.payload,
      });

    case types.FAILED_TO_LOAD:
      return ({
        ...state,
        error: action.payload,
      });

    default:
      return state;
  }

};
