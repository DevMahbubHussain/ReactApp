import React from 'react'
import { useNavigate } from 'react-router-dom'
const About = () => {

  const navigate =  useNavigate()


  return (
    <div>
      <h2>I am About Page</h2>
      <p>About Page Content</p>
      <button type='button' onClick={() => {
        navigate('/')
      }}>Back to Home Page</button>
    </div>
  );
}

export default About
