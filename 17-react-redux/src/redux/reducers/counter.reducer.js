import { INCREMENT } from "../actions/counter.actions";

const initialState = {
  counter: 1111,
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    default:
      return state;
  }
};

export default counter;
