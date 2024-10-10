import React, { useState } from 'react';
import './search.css';
import { SearchImg } from './SearchImg';

const SearchPage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  const fetchMovies = async () => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?i=${query}&apikey=6de3f1f9`);
      const data = await response.json();
      console.log(data);
      setMovies(data.Search || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <nav>
        <a className='logo'>UBOMMA</a>
        <a href='#about'>About</a>
        <a href='#bug-report'>Bug Report</a>
        <a href='#contact'>Contact</a>
        <input
          placeholder='Search..'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={fetchMovies} id='searchData'>search</button>
      </nav>
      <div className='movies-container'>
        {movies.map((movie) => (
          <SearchImg movieTitle={movie.Title} moviePoster={movie.Poster} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
