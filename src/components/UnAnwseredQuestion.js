import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const UnAnsweredQuestion = ({ users, questions, questionId }) => {
  const question = questions[questionId],
    user = users[question.author];

  let selectedOption;

  const answerQuestion = () => {
    console.log({selectedOption})
  }
  return (
    <div className="card question-card question-card--details">
      <h5 className="card-header">{ user.name } asks:</h5>
      <div className="card-body">
        <img className="question-card__avatar" src={user.avatarURL} alt={`${user.name} avatar`} />
        <div className="question-card__text">
          <h5>Would you rather</h5>

          <div className="question-card__options">
            <div onClick={() => {selectedOption = "optionOne"}} className="custom-control custom-radio">
              <input type="radio" id="optionOne" name="questionOption" className="custom-control-input"/>
              <label className="custom-control-label" htmlFor="optionOne">{question.optionOne.text}</label>
            </div>
            <div onClick={() => {selectedOption = "optionTwo"}} className="custom-control custom-radio">
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

const mapStateToProps = ({ users, questions }) => ({ users, questions })
 
export default withRouter(connect(mapStateToProps)(UnAnsweredQuestion));
