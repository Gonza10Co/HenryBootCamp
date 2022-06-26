import React from "react";
import { connect } from "react-redux";
import "./UserPosts.css";
import { getAllUserPosts } from "../../actions";

export class UserPosts extends React.Component {
  componentDidMount() {
    const userid = this.props.match.params.id;
    this.props.getAllUserPosts(userid);
  }

  render() {
    return (
      <div className="details">
        <h4 className="title">Posts del usuario</h4>
        {this.props.userPosts.map((p) => (
          <div key={p.id}>
            <h3>{p.id} {p.title}</h3>
            <p>{p.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export function mapStateToProps(state) {
  return {
    userPosts: state.userPosts,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    getAllUserPosts: (id) => dispatch(getAllUserPosts(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPosts);
