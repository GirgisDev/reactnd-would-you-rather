import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Question = ({ users, authedUser, question }) => {
  const user = users[question.author];
  
  return (
    <div className="card question-card">
      <h5 className="card-header">{ user.name } asks:</h5>
      <div className="card-body">
        <img className="question-card__avatar" src={user.avatarURL} alt={`${user.name} avatar`} />
        <div className="question-card__text">
          <h5>Would you rather</h5>
          <p className="card-text">{ question.optionOne.text }</p>
          <Link 
            className="btn btn-block btn-outline-success" 
            to={`questions/${question.id}`}>Viwe pull</Link>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = ({ users }) => ({ users })

export default connect(mapDispatchToProps)(Question);