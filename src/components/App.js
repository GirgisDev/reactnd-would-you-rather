import React from 'react';
import './../App.css';
import Navbar from './Navbar';
import "bootstrap/dist/css/bootstrap.min.css"
import Login from './Login';
import { connect } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Login />
    </div>
  );
}

export default connect()(App);
