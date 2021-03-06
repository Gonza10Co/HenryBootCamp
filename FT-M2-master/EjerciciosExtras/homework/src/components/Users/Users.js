import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getAllUsers } from "../../actions/index";
import "./Users.css";

export class Users extends Component {
  componentDidMount() {
  this.props.getAllUsers()
}
  render() {
    return (
      <div className="details">
        <h4 className="title">Usuarios del blog</h4>
        {/* Aqui deberias poner tu lista de usuarios! */}
        <table>
          <thead>
            <tr className="header">
              <th>Nombre</th>
              <th>Usuario</th>
              <th>Ver</th>
            </tr>
            {this.props.users.map((u) => (
              <tr>
                <td>{u.name}</td>
                <td>{u.username}</td>
                <td>
                  <button>
                    <Link to={`/users/${u.id}/posts`} className="button">
                      Posts
                    </Link>
                  </button>
                </td>
              </tr>
            ))}
          </thead>
          <tbody></tbody>
        </table>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({ users: state.users });

export const mapDispatchToProps = (dispatch) => ({
  getAllUsers: () => dispatch(getAllUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
