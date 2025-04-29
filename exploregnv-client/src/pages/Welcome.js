import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../App.css';
import Header from '../components/Header';

function Welcome() {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/signup'); 
  };

  const handleLoginClick = () => {
    navigate('/login'); 
  };


  return (
    <div className="blank-page">
      <Header />
      <p> Say Yes to Gainesville's Best (add an image under this) </p>
      
      <p> Already have an account? </p>
      <button onClick={handleLoginClick}>Login Here</button>
      <p> Don't have an account? </p>
      <button onClick={handleSignUpClick}>Sign Up Here</button>

      <p> Write information about Gainesville and add an image! </p>
    </div>
  );
}

export default Welcome;
