import { ADDED } from "../actions/math.actions";

const initialState = {
  tambah: 999999,
};
console.log("initial state", initialState);

const math = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      console.log("added", action);
      return {
        ...state,
        tambah:
          parseInt(action.payload.input1) + parseInt(action.payload.input2),
      };
    default:
      return state;
  }
};

export default math;
