export const type = "findResults";

export default findResults = (text) => {
  return {
    type,
    payload: text,
  };
};
