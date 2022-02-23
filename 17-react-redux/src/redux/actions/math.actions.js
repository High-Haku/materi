export const ADDED = "ADDED";
export const MULTIPLY = "MULTIPLY";

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
