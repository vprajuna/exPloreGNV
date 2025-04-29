import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <nav className="header">
      <Link to="/" className="logo">exPloreGNV</Link>
      
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for anything..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>
      
    </nav>
  );
}

export default Header;
