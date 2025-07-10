import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../App.css';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function Home() {
  const navigate = useNavigate();

  const handleAttractionsClick = () => {
    navigate('/attractions'); 
  };

  const handleLikedAttractionsClick = () => {
    navigate('/sorted-attractions'); 
  };

  const handleAddAttractionClick = () => {
    navigate('/add-attraction'); 
  };

  return (
    <div className="blank-page">
      <Header />
      <Sidebar />
      
      <div>
        <h1>Home Page</h1>
        <p><button className="home-button" onClick={handleAttractionsClick}>Explore New Attractions</button></p>
        <p><button className="home-button" onClick={handleLikedAttractionsClick}>View Your Liked Attractions</button></p>
        <p><button className="home-button" onClick={handleAddAttractionClick}>Add a New Attraction</button></p>
      </div>
    </div>
  );
}

export default Home;
