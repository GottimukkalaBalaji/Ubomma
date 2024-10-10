import React from 'react';
import './search1.css';

export const SearchImg = ({ movieTitle, moviePoster }) => {
  return (
    <div className="box">
      <img 
        src={moviePoster || 'https://via.placeholder.com/215x301?text=No+Image+Available'} 
        alt={`${movieTitle} poster`} 
        className="boxImg" 
      />
      <div>
        <h3 className="moviename1">
          {movieTitle} Movie Watch Online & Free Download - UBOMMA
        </h3>
        <a className="movieLink2" href={`/open?title=${encodeURIComponent(movieTitle)}`}>
          Watch {movieTitle}
        </a>
        <p className="moviePara3">About the movie...</p>
      </div>
    </div>
  );
};
