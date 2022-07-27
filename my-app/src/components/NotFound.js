import React from 'react';
import { Link } from "react-router-dom";
import '../index.css';
const NotFound = () => {
  return (
    <>
      <div className='not-found'>
        <h1>404!</h1>
        <p>Page not found</p>
        <Link to={"/"}>Go to homepage.</Link>
      </div>
    </>
  )
}

export default NotFound;