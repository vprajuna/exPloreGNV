import React, { useState, useEffect } from 'react';
import '../App.css';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import axios from 'axios';

function Attractions() {
  const [attractions, setAttractions] = useState([]);
  const [likedAttractions, setLikedAttractions] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    axios.get('http://localhost:3000/attractions')
      .then(response => {
        setAttractions(response.data);
        setLoading(false); 
      })
      .catch(error => {
        console.error('Error fetching attractions:', error);
        setLoading(false);
      });
  }, []);

  const handleLikedAttractions = () => {
    const [current, ...rest] = attractions;
    setLikedAttractions([...likedAttractions, current.id]);
    setAttractions(rest);
  };

  const handleDisLikedAttractions = () => {
    const [current, ...rest] = attractions;
    setAttractions([...rest, current]); 
  };

  const currentAttraction = attractions[0];

  return (
    <div className="blank-page">
      <Header />
      <Sidebar />
      <h1>Explore what Gainesville has to offer!</h1>
      <div className="attractions-container">
        {loading ? (
          <p>Loading attractions...</p>
        ) : currentAttraction ? (
          <div className="attraction-card" key={currentAttraction.id}>
            <h2>{currentAttraction.name}</h2>
            <p>{currentAttraction.description}</p>
            <p><strong>Category:</strong> {currentAttraction.category}</p>
            <p><strong>Address:</strong> {currentAttraction.address}</p>
            <p><strong>Website:</strong> {currentAttraction.website && (
              <a href={currentAttraction.website} target="_blank" rel="noopener noreferrer">Click to view website</a>
            )}</p>
            <p><strong>Phone:</strong> {currentAttraction.phone}</p>
            <p><strong>Email:</strong> {currentAttraction.email}</p>
            <p><strong>Social Media:</strong> {currentAttraction.social_media && (
              <a href={currentAttraction.social_media} target="_blank" rel="noopener noreferrer">Click to view Instagram page</a>
            )}</p>
            <p><strong>Hours of Operation:</strong> {currentAttraction.hours_of_operation}</p>
            <p><strong>New Updates:</strong> {currentAttraction.new_updates}</p>
            {currentAttraction.image_url && (
              <img src={currentAttraction.image_url} alt={currentAttraction.name} style={{ width: '100%', borderRadius: '8px' }} />
            )}
            <div className="attraction-buttons">
              <button onClick={() => handleLikedAttractions(currentAttraction)}>Click to Like this Attraction</button>
              <button onClick={() => handleDisLikedAttractions(currentAttraction)}>Click to Dislike this Attraction</button>
            </div>
          </div>
        ) : (
          <h2>You've gone through all attractions!</h2>
        )}
      </div>
    </div>
  );
}

export default Attractions;
