import {
  GET_USER_REJECTED,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
} from "../actions/users.actions";

const initialState = {
  data: [],
  error: null,
  isLoading: false,
};

export const getUserReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.result,
      };
    case GET_USER_REJECTED:
      return {
        ...state,
        isLoading: false,
        data: action.error,
      };
    default:
      return state;
  }
};
