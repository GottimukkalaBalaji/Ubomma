import React from 'react';
import './card.css';
import { Link } from 'react-router-dom';


const card = (props) => {
  const { movieTitle, moviePoster } = props;
  return (
    <><div className='card'>
      <div className='movieImage'>
        <Link to="/open"><img src={moviePoster} /></Link>
      </div>
      <h4>{movieTitle}</h4>
      <p>2024</p>
    </div>
    </>
  )
}

export default card