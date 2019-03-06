import * as types from "../actions";

export const charsReducer = (characters = [], action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case types.LOADED_SUCCESSFULLY:
      return action.payload;
    default:
      return characters;
  }
};

export const fetchingReducer = (fetching = false, action) => {
  switch (action.type) {
    case types.FETCHING_DATA:
      return action.payload;
    default:
      return fetching;
  }
};

export const errorReducer = (error = null, action) => {
  switch (action.type) {
    case types.FAILED_TO_LOAD:
      return action.payload;
    default:
      return error;
  }
};
