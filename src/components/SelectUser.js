import React, { useState } from 'react'

const SelectUser = () => {
  const [showList, setShowList] = useState(false);

  let toggleDropDown = () => {
    setShowList(!showList)
  }
  return (
    <div className="dropdown">
      <button 
        className="btn btn-block btn-light dropdown-toggle user-dropdown" 
        aria-haspopup="true" aria-expanded="false"
        onClick={toggleDropDown}>
        Select user
      </button>
      <ul className={`dropdown-menu dropdown-menu--block ${showList ? 'show' : ''}`} aria-labelledby="dropdownMenuButton">
        <li className="dropdown-item">
          <img 
            className="dropdown-item__image"
            src="https://tylermcginnis.com/would-you-rather/tyler.jpg" 
            alt=""/>
          <span className="dropdown-item__name">Tyler beeh</span>
        </li>
        <li className="dropdown-item">
          <img 
            className="dropdown-item__image"
            src="https://tylermcginnis.com/would-you-rather/tyler.jpg" 
            alt=""/>
          <span className="dropdown-item__name">Tyler beeh</span>
        </li>
        <li className="dropdown-item">
          <img 
            className="dropdown-item__image"
            src="https://tylermcginnis.com/would-you-rather/tyler.jpg" 
            alt=""/>
          <span className="dropdown-item__name">Tyler beeh</span>
        </li>
      </ul>
    </div>
  );
}
 
export default SelectUser;