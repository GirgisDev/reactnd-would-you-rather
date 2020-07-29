import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <h2 className="not-found">Not found. you can go <Link to="/">home</Link></h2>
  );
}
 
export default NotFound;