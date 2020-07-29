import React, { useEffect } from 'react';
import './../App.css';
import Navbar from './Navbar';
import "bootstrap/dist/css/bootstrap.min.css"
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared.action';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from './Login';
import Questions from './Questions';
import QuestionDetails from "./QuestionDetails"
import NewQuestion from './NewQuestion';
import LeaderBoard from './LeaderBoard';
import LoadingBar from 'react-redux-loading';
import NotFound from './NotFound';
import Question from './Question';

function App({ loading, authedUser, dispatch, history, location }) {

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
      <LoadingBar />
      <Navbar />
      {loading 
        ? <h3 className="loading-text">Loading...</h3> 
        : (
          <Switch>
            <Route path="/questions/:id" component={QuestionDetails} />
            <Route path="/login" component={Login} />
            <Route path="/add" component={NewQuestion} />
            <Route path="/leaderboard" component={LeaderBoard} />
            <Route path="/" exact component={Questions} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        )
      } 
    </div>
  );
}

const mapStateToProps = ({ authedUser, loadingBar }) => ({ authedUser, loading: loadingBar.default })

export default withRouter(connect(mapStateToProps)(App));
