import React from 'react'
import { connect } from 'react-redux';

const LeaderBoard = ({ users }) => {

  const rankClass = ["cr--gold", "cr--green", "cr--silver"];

  return (
    <div className="leaderboard">
      {users.length ? (
        users.map((user, i) => (
          <div key={user.id} className="user-rank">

            <img 
              className="user-rank__avatar" 
              src={user.avatarURL} 
              alt={`${user.name} avatar`}/>

            <div className="user-rank__details">
              <h4>{user.name}</h4>
              <div className="user-rank__details__result">
                Answered questions 
                <span className="user-rank__details__result__score">{user.totalAnswered}</span>
              </div>
              <div className="user-rank__details__result">
                Created questions 
                <span className="user-rank__details__result__score">{user.totalAsked}</span>
              </div>
            </div>

            <div className="user-rank__score text-center">
              <div className="card">
                <div className="card-header">
                  Score
                </div>
                <div className="card-body card-body--less-padding">
                  <span className="user-rank__score__final-score">{user.totalQuestions}</span>
                </div>
              </div>
            </div>

            <div className="clearfix"></div>
            {i <= 2 && (
              <div className={`cr ${rankClass[i]}`}>Rank { i + 1 }</div>
            )}
          </div>
        ))
      ) : null}
    </div>
  );
}
 
const mapStateToProps = ({ users }) => {
  let modUsers = Object.keys(users).map(qid => {
    let user = users[qid];
    user['totalAnswered'] = Object.keys(user.answers).length;
    user['totalAsked'] = user.questions.length;
    user['totalQuestions'] = user['totalAnswered'] + user['totalAsked'];

    return user;
  }).sort((a,b) => b.totalQuestions - a.totalQuestions);

  return {
    users: modUsers,
  }
};

export default connect(mapStateToProps)(LeaderBoard);