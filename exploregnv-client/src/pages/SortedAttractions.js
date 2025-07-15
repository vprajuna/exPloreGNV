import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function SortedAttractions() {
  const [likedAttractions, setLikedAttractions] = useState([]);
  // const userId = 1;

  useEffect(() => {
    axios.get(`http://localhost:3001/liked-attractions/1`) // get liked attractions from the database under userId
      .then(response => {
        setLikedAttractions(response.data);
      })
      .catch(error => {
        console.error('Error fetching liked attractions:', error);
      });
  }, []);

  return (
    <div className="blank-page">
      <Header />
      <Sidebar />
      <div className="content">
        <h1>Liked Attractions</h1>
        {likedAttractions.length === 0 ? (
          <p>You haven't liked any attractions yet.</p>
        ) : (
          <ul className="attractions-list">
            {likedAttractions.map(attraction => (
              <li key={attraction.id} className="attraction-item">
                <h2>{attraction.name}</h2>
                <p>{attraction.description}</p>
                <p><strong>Category:</strong> {attraction.category}</p>
                <p><strong>Address:</strong> {attraction.address}</p>
                {attraction.image_url && (
                  <img
                    src={attraction.image_url.startsWith('http') 
                      ? attraction.image_url 
                      : `http://localhost:3000${attraction.image_url}`
                    }
                    alt={attraction.name}
                    style={{ width: '200px', height: 'auto' }}
                  />
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SortedAttractions;
