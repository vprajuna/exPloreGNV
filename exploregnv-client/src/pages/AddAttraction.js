import React from 'react';
import '../App.css';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function AddAttractions() {
  
  return (
    <div className="blank-page">
      <Header />
      <Sidebar />
      <div>
        <h1>Add Your Own Attraction</h1>
      </div>
      
    </div>
  );
}

export default AddAttractions;