import { ADDED, MULTIPLY, LUASSEGITIGA } from "../actions/math.actions";

const initialState = {
  tambah: 999999,
  kali: 50,
  luas: 123,
};
console.log("initial state", initialState);

export const math = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      console.log("added", action);
      return {
        ...state,
        tambah:
          parseInt(action.payload.input1) + parseInt(action.payload.input2),
      };
    case MULTIPLY:
      return {
        ...state,
        kali: parseInt(action.payload.input1) * parseInt(action.payload.input2),
      };
    case LUASSEGITIGA:
      return {
        ...state,
        luas:
          (parseInt(action.payload.input1) * parseInt(action.payload.input2)) /
          2,
      };
    default:
      return state;
  }
};
