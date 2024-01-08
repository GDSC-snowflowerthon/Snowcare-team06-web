import React, { useState } from 'react';
import './SearchBar.css';

const searchBar = ({ id }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    console.log(`검색어(${id}):`, searchTerm);
  };

  return (
    <div className='search-container'>
    <div className="search">
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        value={searchTerm}
        onChange={handleSearchChange}
        id={id}
      />
      <button className="sButton" onClick={handleSearch}>검색</button>
    </div>
    </div>
  );
};

export default searchBar;