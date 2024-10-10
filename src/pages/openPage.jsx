import React from 'react'
import "./open.css"
import './SearchPage'

const openPage = () => {
  return (
    <><div>
        <nav>
        <a className='logo'>UBOMMA</a>
        <a>Home</a>
        <a>
            About
        </a>
        <a>Bug</a>
        <a href='/search'><input placeholder='Search..'/></a><button id='searchButton'/>
        </nav>
    </div>
    <div className='openData'>
      <div className='OpenImage'>
      <img src="" alt="movieImage" className='OpenImage'/>
    </div>
    <div>
      <h1 className='moviename'>MovieName</h1>
      <p className='MovieData'>2024</p>
      <p className='MovieData'>Action</p>
      <p className='MovieData1'>cast:heroname</p>
      <p className='MovieData'>Director:DirectorName</p>
      <button id="trailerButton">TRAILER</button>
      <button id="downButton">MOBILE DOWNLOAD</button>
    </div>
    </div>
    <div className='video'>
      <video controls ></video>
      <p id='MovieDown'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet ad iure pariatur natus voluptatibus autem!</p>
      <p id='MovieDown'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet ad iure pariatur natus voluptatibus autem! Lorem ipsum dolor sit amet.</p>
    </div>
    <div className="footer">
            <a className='a11'>Contact</a>|<a>DMCA</a>|<a>T&C</a><p className='footerp'>2024 UBOMMA</p>
        </div>
    </>
  )
}

export default openPage