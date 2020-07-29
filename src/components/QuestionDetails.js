import React from 'react'
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import AnsweredQuestion from './AnsweredQuestion';
import UnAnwseredQuestion from './UnAnwseredQuestion';
import NotFound from './NotFound';

const QuestionDetails = ({ authedUser, questions, match, history }) => {
  const questionId = match.params.id,
    question = questions[questionId];

  const isAnsweredQuestion = () => {
    if (
      question.optionOne.votes.includes(authedUser) 
      || question.optionTwo.votes.includes(authedUser)
    ) return true;
    return false;
  }

  return (
    <React.Fragment>
      {question && authedUser ? (
        isAnsweredQuestion() 
          ? <AnsweredQuestion questionId={questionId} /> 
          : <UnAnwseredQuestion questionId={questionId} /> 
      ) : <NotFound /> }
    </React.Fragment>
  );
}

const mapStateToProps = ({ authedUser, questions }) => ({ authedUser, questions })
 
export default withRouter(connect(mapStateToProps)(QuestionDetails));