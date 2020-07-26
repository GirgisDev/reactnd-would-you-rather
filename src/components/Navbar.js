import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav nav-masthead justify-content-center">
      <NavLink className="nav-link" to="/">Home</NavLink>
      <NavLink className="nav-link" to="/new-questions">New questions</NavLink>
      <NavLink className="nav-link" to="/leader-board">Leader board</NavLink>
      <div className="logged-user">
        <span className="logged-user__greeting">Hello, Girgis A.Jacoub</span>
        <img src="https://avatars2.githubusercontent.com/u/11912956?s=460&u=9d9c42a55881f00fa4e1345e1af5f6795b5fd107&v=4" alt="" className="logged-user__avatar"/>
      </div>
    </nav>
  );
}

export default Navbar;