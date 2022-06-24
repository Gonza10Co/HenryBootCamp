export const addUser = (user) => ({
  type: "ADD_USER",
  payload: user,
});

export const addApiUser = (users) => ({
  type: "ADD_USERS",
  payload: users,
});

export function fetchUsers() {
  return function (dispatch) {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        let usersFormatted = data.map((u) => {
          return {
            id: u.id,
            name: u.name,
            username: u.username,
          };
        });
        dispatch(addApiUser(usersFormatted));
      });
  };
}
