const initialState = [{id:2,title:'testing'}]

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "findSuggestions":
      return [{ ...state, ...payload }];

    default:
      return state;
  }
}
