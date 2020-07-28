import React, { useEffect } from 'react';
import './../App.css';
import Navbar from './Navbar';
import "bootstrap/dist/css/bootstrap.min.css"
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared.action';
import { withRouter, Switch, Route } from 'react-router-dom';

import Login from './Login';
import Questions from './Questions';
import QuestionDetails from "./QuestionDetails"
import NewQuestion from './NewQuestion';

function App({ authedUser, dispatch, history, location }) {

  useEffect(() => {
    if (authedUser === null) dispatch(handleInitialData());
    
    if (location.pathname !== "/login" && !authedUser) history.push("/login")
    let unListenToRouteing = history.listen((location, action) => {
      if (location.pathname !== "/login" && !authedUser) history.push("/login")
    });

    return () => {
      unListenToRouteing();
    }
  }, [authedUser])
  
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/questions/:id" component={QuestionDetails} />
        <Route path="/add" component={NewQuestion} />
        <Route path="/" exact component={Questions} />
      </Switch>
    </div>
  );
}

const mapStateToProps = ({ authedUser }) => ({ authedUser })

export default withRouter(connect(mapStateToProps)(App));
