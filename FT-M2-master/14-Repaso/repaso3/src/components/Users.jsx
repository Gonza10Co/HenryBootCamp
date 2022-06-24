import User from "./User";
import { connect } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "../store/actions";

function Users({ users, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <>
      <h3>Users</h3>
      {users.map((u, i) => (
        <User key={i} id={u.id} name={u.name} username={u.username} />
      ))}
    </>
  );
}

const mapStateToProps = (state) => ({ users: state.users });

export default connect(mapStateToProps, { fetchUsers })(Users);
