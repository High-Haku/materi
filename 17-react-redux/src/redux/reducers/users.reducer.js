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
      console.log("tes sukses", action);
      return {
        ...state,
        isLoading: false,
        dataaaa: action.payload,
      };
    case GET_USER_REJECTED:
      console.log("tes reject", action);
      return {
        ...state,
        isLoading: false,
        data: action.error,
      };
    default:
      return state;
  }
};
