import React from 'react';
import '../App.css';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function SortedAttractions() {
  
  return (
    <div className="blank-page">
      <Header />
      <Sidebar />
      <div>
        <h1>Liked Attractions</h1>
      </div>
      
    </div>
  );
}

export default SortedAttractions;