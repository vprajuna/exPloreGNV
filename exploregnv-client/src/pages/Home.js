import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../App.css';
import Header from '../components/Header';

function Home() {
  const navigate = useNavigate();

  const handleAttractionsClick = () => {
    navigate('/attractions'); 
  }

  const handleLikedAttractionsClick = () => {
    navigate('/sorted-attractions'); 
  }

  return (
    <div className="blank-page">
      <Header />
      <h1>Home Page</h1>
      <p><button onClick={handleAttractionsClick}>Explore New Attractions</button></p>
      <p><button onClick={handleLikedAttractionsClick}>View your Liked Attractions</button></p>
    </div>
  );
}

export default Home;