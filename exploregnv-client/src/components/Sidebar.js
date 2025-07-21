import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react'; 
import '../App.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <>
      <div className="hamburger" onClick={toggleSidebar}>
        <Menu size={40} />
      </div>

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/home" onClick={toggleSidebar}>Home</Link></li>
          <li><Link to="/attractions" onClick={toggleSidebar}>New Attractions</Link></li>
          <li><Link to="/sorted-attractions" onClick={toggleSidebar}>Liked Attractions</Link></li>
          <li><Link to="/add-attraction" onClick={toggleSidebar}>Add Attraction</Link></li>
          <li><Link to="/chatbot" onClick={toggleSidebar}>Chat with Us</Link></li>
          <li><Link to="/" onClick={toggleSidebar}>Logout</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
