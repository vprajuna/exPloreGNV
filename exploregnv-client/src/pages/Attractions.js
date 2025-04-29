import React, { useState, useEffect } from 'react';
import '../App.css';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import axios from 'axios';

function Attractions() {
  const [attractions, setAttractions] = useState([]);
  const [likedAttractions, setLikedAttractions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/attractions')
      .then(response => {
        setAttractions(response.data);
      })
      .catch(error => {
        console.error('Error fetching attractions:', error);
      });
  }, []);

  const handleLikedAttractions = (attraction) => {
    if (!likedAttractions.find(item => item.id === attraction.id)) {
      setLikedAttractions([...likedAttractions, attraction.id]);
    }
  };   

  return (
    <div className="blank-page">
      <Header />
      <Sidebar />
      <h1>Explore what Gainesville has to offer!</h1>

        <div>
        {attractions.map((attraction) => (
            <div key={attraction.id}>
            <h2>{attraction.name}</h2>
            <p>{attraction.description}</p>
            <p><strong>Category:</strong> {attraction.category}</p>
            <p><strong>Address:</strong> {attraction.address}</p>
            <p><strong>Website:</strong> {attraction.website && <a href={attraction.website} target="_blank" rel="noopener noreferrer">Click to view website</a>}</p>
            <p><strong>Phone:</strong> {attraction.phone}</p>
            <p><strong>Email:</strong> {attraction.email}</p>
            <p><strong>Social Media:</strong> {attraction.social_media && <a href={attraction.social_media} target="_blank" rel="noopener noreferrer">Click to view Instagram page</a>}</p>
            <p><strong>Hours of Operation:</strong> {attraction.hours_of_operation}</p>
            <p><strong>New Updates:</strong> {attraction.new_updates}</p>
            {attraction.image_url && <img src={attraction.image_url} alt={attraction.name} style={{width: '500px'}} />}
            <p><button onClick={() => handleLikedAttractions(attraction.id)}>Click to Like this Attraction</button></p>
            </div>
        ))}
        </div>

    </div>
  );
}

export default Attractions;
