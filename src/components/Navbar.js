import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { receiveAuthedUser } from '../actions/authedUser.action';

const Navbar = ({ dispatch, user }) => {
  const logout = () => {
    dispatch(receiveAuthedUser(""));
  }
  return (
    <nav className="nav nav-masthead justify-content-center">
      <NavLink 
        className="nav-link" 
        exact
        activeClassName="nav-link--active" 
        to="/">Home</NavLink>
      <NavLink 
        className="nav-link" 
        activeClassName="nav-link--active" 
        to="/new-questions">New questions</NavLink>
      <NavLink 
        className="nav-link" 
        activeClassName="nav-link--active" 
        to="/leader-board">Leader board</NavLink>
      {user && (
        <div className="logged-user">
          <span className="logged-user__greeting">Hello, {user.name}</span>
          <img src={user.avatarURL} alt={`${user.name} avatar`} className="logged-user__avatar"/>
          <div onClick={logout} className="nav-link nav-link--inline">Logout</div>
        </div>
      )}
    </nav>
  );
}

const mapStateToProps = ({ users, authedUser }) => ({ user: users[authedUser] })

export default connect(mapStateToProps)(Navbar);