export const ADDED = "ADDED";

export const addButton = (input) => {
  console.log(input);
  return {
    type: ADDED,
    payload: input,
  };
};
