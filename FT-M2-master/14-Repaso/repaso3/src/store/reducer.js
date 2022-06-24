const initialState = { users: [] };

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_USER":
      return { users: [...state.users, payload] };
    case "ADD_USERS":
      return { users: payload };
    default:
      return state;
  }
};
