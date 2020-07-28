import React, { useState } from 'react'
import Question from './Question'
import { connect } from 'react-redux';

const Questions = ({ answeredQuestions, unAnsweredQuestions }) => {
  const [showingQuestions, setShowingQuestions] = useState("answered");

  return (
    <div className="card questions-card">
      <div className="card-header questions-header">
        <div
          onClick={() => setShowingQuestions("answered")}
          className={`questions-header__tab ${showingQuestions === 'answered' ? 'questions-header__tab--active' : ''}`}>
          Answered questions
        </div>
        <div
          onClick={() => setShowingQuestions("unAnswered")}
          className={`questions-header__tab ${showingQuestions === 'unAnswered' ? 'questions-header__tab--active' : ''}`}>
          Unanswered questions
        </div>
      </div>
      <div className="card-body">
        {showingQuestions === "answered" ? (
            answeredQuestions.length ? (
              answeredQuestions.map(question => <Question key={question.id} question={question} />)
            ) : null
          ) : (
              unAnsweredQuestions.length ? (
                unAnsweredQuestions.map(question => <Question key={question.id} question={question} />)
              ) : null
            )
        }
      </div>
    </div>
  );
}

const mapStateToProps = ({ authedUser, users, questions }) => {
  let answeredQuestions = [], unAnsweredQuestions = [];
  answeredQuestions = Object.keys(questions).filter(qid => {
    let question = questions[qid],
      votes = option => question[option].votes;
    if (votes("optionOne").includes(authedUser) || votes("optionTwo").includes(authedUser)) return question;
    return false;
  }).map(qid => questions[qid]);

  unAnsweredQuestions = Object.keys(questions).filter(qid => {
    let question = questions[qid],
      votes = option => question[option].votes;
    if (!votes("optionOne").includes(authedUser) && !votes("optionTwo").includes(authedUser)) return question;
    return false;
  }).map(qid => questions[qid]);

  return {
    answeredQuestions,
    unAnsweredQuestions
  }
}

export default connect(mapStateToProps)(Questions);