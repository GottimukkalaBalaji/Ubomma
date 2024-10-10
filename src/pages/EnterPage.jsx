import React from 'react';
import './enterpage.css';
import { Link } from 'react-router-dom';

const EnterPage = () => {
  return (
    <>
    <div className="enterBg">
        <h1 id="titleUB">
            <b>UBOMMA</b>
        </h1>
        <h2 id='telugu'>100% Telugu Entertainment</h2>
        <button className='enterMainButton'><Link to="/home">Enter</Link></button>
        <h2>Watch iBOMMA Telugu movies online in HD quality.</h2>
        <h2>Exclusively designed for smartphones, tablets, PC's.</h2>
    </div>
    </>
  )
}

export default EnterPage