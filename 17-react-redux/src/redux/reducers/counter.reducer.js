import { INCREMENT } from "../actions/counter.actions";

const initialState = {
  counter: 1234,
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      console.log("plus counter");
      return {
        ...state,
        counter: state.counter + 1,
      };
    default:
      return state;
  }
};

export default counter;
