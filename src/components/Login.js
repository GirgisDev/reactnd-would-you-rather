import React, { useState } from 'react';
import SelectUser from './SelectUser';
import { connect } from 'react-redux';
import { receiveAuthedUser } from '../actions/authedUser.action';

const Login = ({ dispatch, authedUser, history }) => {

  const [selectedUser, setSelectedUser] = useState("");
  
  const login = () => {
    dispatch(receiveAuthedUser(selectedUser));
    setTimeout(() => {
      history.push("/");
    }, 0)
  }

  return (
    <div className="card login-card text-center">
      <div className="card-header">
        <h5>Welcome to the would you rather App!</h5>
        <p>Press sign in to continue</p>
      </div>
      <div className="card-body">
        <img 
          className="login-card__logo"
          src="https://railsware.com/blog/wp-content/uploads/2017/06/Hideable-React.png" 
          alt="react and redux"/>

        <SelectUser selectUser={setSelectedUser} />
        <br/>

        <button 
          onClick={login}
          className="btn btn-block btn-success">Login</button>
      </div>
    </div>
  );
}

const mapStateToProps = ({ authedUser }) => ({ authedUser })

export default connect(mapStateToProps)(Login);