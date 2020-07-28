import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { handleAnswerQuestion } from '../actions/questions.action';

const UnAnsweredQuestion = ({ authedUser, users, questions, questionId, dispatch }) => {
  const question = questions[questionId],
    user = users[question.author];

  let answer;

  const answerQuestion = () => {
    dispatch(handleAnswerQuestion({ authedUser, qid: questionId, answer }))
  }
  return (
    <div className="card question-card question-card--details">
      <h5 className="card-header">{ user.name } asks:</h5>
      <div className="card-body">
        <img className="question-card__avatar" src={user.avatarURL} alt={`${user.name} avatar`} />
        <div className="question-card__text">
          <h5>Would you rather</h5>

          <div className="question-card__options">
            <div onClick={() => {answer = "optionOne"}} className="custom-control custom-radio">
              <input type="radio" id="optionOne" name="questionOption" className="custom-control-input"/>
              <label className="custom-control-label" htmlFor="optionOne">{question.optionOne.text}</label>
            </div>
            <div onClick={() => {answer = "optionTwo"}} className="custom-control custom-radio">
              <input type="radio" id="optionTwo" name="questionOption" className="custom-control-input"/>
              <label className="custom-control-label" htmlFor="optionTwo">{question.optionTwo.text}</label>
            </div>
          </div>
          
          <button onClick={answerQuestion} className="btn btn-block btn-success">Submit</button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ authedUser, users, questions }) => ({ authedUser, users, questions })
 
export default withRouter(connect(mapStateToProps)(UnAnsweredQuestion));
