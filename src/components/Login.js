import React from 'react';
import SelectUser from './SelectUser';

const Login = () => {
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

        <SelectUser />
        <br/>

        <button className="btn btn-block btn-success">Login</button>
      </div>
    </div>
  );
}

export default Login;