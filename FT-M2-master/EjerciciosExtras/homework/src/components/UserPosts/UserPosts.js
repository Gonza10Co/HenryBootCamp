import React from 'react';
import { connect } from 'react-redux';
import './UserPosts.css';
import { getAllUserPosts } from '../../actions';

export class UserPosts extends React.Component {

  render() {
   
    return (
      <div className="details">
        <h4 className="title">Posts del usuario {/*userid*/}</h4>
        
      </div>
    )
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