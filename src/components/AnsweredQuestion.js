import React from 'react'
import { connect } from 'react-redux';

const AnsweredQuestion = ({ users, authedUser, questions, questionId }) => {
  const question = questions[questionId],
    user = users[question.author],
    optionOneSelected = question.optionOne.votes.includes(authedUser),
    optionTwoSelected = question.optionTwo.votes.includes(authedUser);

  const getResults = () => {
    let optionOneVotes = question.optionOne.votes.length,
      optionTwoVotes = question.optionTwo.votes.length,
      totalVotes = optionOneVotes + optionTwoVotes,
      optionOnePercent = (optionOneVotes / totalVotes) * 100,
      optionTwoPercent = (optionTwoVotes / totalVotes) * 100;

    return {
      optionOneVotes,
      optionTwoVotes,
      totalVotes,
      optionOnePercent: `${optionOnePercent}%`,
      optionTwoPercent: `${optionTwoPercent}%`
    }
  }

  return (
    <div className="card question-card question-card--details">
      <h5 className="card-header">Added by {user.name}</h5>
      <div className="card-body">
        <img className="question-card__avatar" src={user.avatarURL} alt={`${user.name} avatar`} />
        <div className="question-card__text">
          <h4>Results:</h4>

          <div className={`question-card__result-box ${optionOneSelected ? 'question-card__result-box--selected' : ''}`}>
            <h6 className="question-card__result-box__title">Would you rather {question.optionOne.text}</h6>
            <div className="question-card__result-box__progress">
              <div
                style={{ width: getResults().optionOnePercent }}
                className="question-card__result-box__progress__bar">{getResults().optionOnePercent}</div>
            </div>
            <div className="question-card__result-box__votes">
              {getResults().optionOneVotes} out of {getResults().totalVotes}
            </div>
          </div>

          <div className={`question-card__result-box ${optionTwoSelected ? 'question-card__result-box--selected' : ''}`}>
            <h6 className="question-card__result-box__title">Would you rather {question.optionTwo.text}</h6>
            <div className="question-card__result-box__progress">
              <div
                style={{ width: getResults().optionTwoPercent }}
                className="question-card__result-box__progress__bar">{getResults().optionTwoPercent}</div>
            </div>
            <div className="question-card__result-box__votes">
              {getResults().optionTwoVotes} out of {getResults().totalVotes}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ users, authedUser, questions }) => ({ users, authedUser, questions })

export default connect(mapStateToProps)(AnsweredQuestion);