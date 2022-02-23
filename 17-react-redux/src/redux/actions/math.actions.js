export const ADDED = "ADDED";
export const MULTIPLY = "MULTIPLY";
export const LUASSEGITIGA = "LUASSEGITIGA";

export const addButton = (input) => {
  console.log(input);
  return {
    type: ADDED,
    payload: input,
  };
};

export const multiButton = (input) => {
  return {
    type: MULTIPLY,
    payload: input,
  };
};

export const luasSegitigaButton = (input) => {
  return {
    type: LUASSEGITIGA,
    payload: input,
  };
};
