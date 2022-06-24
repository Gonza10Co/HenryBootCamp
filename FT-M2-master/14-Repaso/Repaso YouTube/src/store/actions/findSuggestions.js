export const type = "findSuggestions";

export default findSuggestions = (text) => {
  return {
    type,
    payload: text,
  };
};
