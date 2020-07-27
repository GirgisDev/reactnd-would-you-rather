import React, { useState } from 'react'
import { connect } from 'react-redux';

const SelectUser = ({ users, selectUser }) => {
  const [showList, setShowList] = useState(false);
  const [authedUser, setAuthedUser] = useState("");

  const toggleDropDown = () => {
    setShowList(!showList)
  }

  const setUser = uid => {
    setAuthedUser(uid);
    toggleDropDown();
    selectUser(uid);
  }

  return (
    <div className="dropdown">
      <button
        className="btn btn-block btn-light dropdown-toggle user-dropdown"
        aria-haspopup="true" aria-expanded="false"
        onClick={toggleDropDown}>
        {authedUser ? users[authedUser].name : "Select user"}
      </button>
      <ul 
        className={`dropdown-menu dropdown-menu--block ${showList ? 'show' : ''}`} 
        aria-labelledby="dropdownMenuButton">
        { users && (
          Object.keys(users).map(uid => (
            <li 
              key={uid} 
              onClick={() => setUser(uid)} 
              className="dropdown-item">
              <img
                className="dropdown-item__image"
                src={users[uid].avatarURL}
                alt={`${users[uid].name} avatar`} />
              <span className="dropdown-item__name">{users[uid].name}</span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

const mapStateToProps = ({ users }) => ({ users })

export default connect(mapStateToProps)(SelectUser);