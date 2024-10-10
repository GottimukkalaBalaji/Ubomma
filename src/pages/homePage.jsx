import React from 'react'
import './home.css'
import MainCard from './MainCard'
import { Link} from 'react'
import './SearchPage'
// import SearchPage from './SearchPage'

const homePage = () => {

    

  return (
  <>
    <nav>
        <a className='logo'>UBOMMA</a>
        <a>Home</a>
        <a>
            About
        </a>
        <a>Bug</a>
        <input placeholder='Search..'/><button id='searchButton' type="button">Search</button>
        </nav><div>
        <h1>Where Quality & clarity Matters</h1>
        <h5>Watch Telugu Movies in HD,execlusively available  on UBOMMA.COM</h5>
        <h5>Developed for SmartPhone,tablets,PC and TV</h5>
        </div><div className='MoviesImg'>
            <MainCard movieTitle="Kalki 2898 AD" moviePoster="https://www.cinejosh.com/newsimg/newsmainimg/kalki-2898-ad-contemplating-new-release-date_b_1504240113.jpg"/>
            <MainCard movieTitle="Guntur Kaaram" moviePoster="https://m.media-amazon.com/images/M/MV5BMjY3ZmMzMzMtMjFhNC00MGU3LTlkNzYtMGUwMzAwNjEyYmJhXkEyXkFqcGdeQXVyMTcyNDY1NDgw._V1_.jpg"/>
            <MainCard movieTitle="Gangs of Godavari" moviePoster="https://www.cinejosh.com/newsimg/newsmainimg/gangs-of-godavari_b_2405240937.jpg"/>
            <MainCard movieTitle="Bharateeyudu 2" moviePoster="https://assets.gadgets360cdn.com/pricee/assets/product/202302/Bharateeyudu-2_1675424809.jpg?downsize=215:301"/>
            <MainCard movieTitle="Pekamedalu" moviePoster="https://assets.gadgets360cdn.com/pricee/assets/product/202407/Pekamedalu-poster_1720700340.jpg?downsize=215:301"/>
            <MainCard movieTitle="Nindha" moviePoster="https://assets.gadgets360cdn.com/pricee/assets/product/202406/nindha-1105241_1718361236.jpg?downsize=215:301"/>
        </div>
        <div className='MoviesImg'>
        <MainCard movieTitle="Harom Hara" moviePoster="https://assets.gadgets360cdn.com/pricee/assets/product/202404/HAROM_HARA_1714390151.jpg?downsize=215:301"/>
        <MainCard movieTitle="Love Mouli" moviePoster="https://assets.gadgets360cdn.com/pricee/assets/product/202405/love_poster1_1716809996.jpg?downsize=215:301"/>
        <MainCard movieTitle="Manamey" moviePoster="https://assets.gadgets360cdn.com/pricee/assets/product/202405/Manamey_p1_1717155500.jpg?downsize=215:301"/>
        <MainCard movieTitle="Weapon" moviePoster="https://assets.gadgets360cdn.com/pricee/assets/product/202405/Weapon-Poster_1717155573.jpg?downsize=215:301"/>
        <MainCard movieTitle="Bhaje Vaayu Vegam" moviePoster="https://assets.gadgets360cdn.com/pricee/assets/product/202405/Bhaje_Vaayu_Vegam_p1_1717158543.jpg?downsize=215:301"/>
        <MainCard movieTitle="Krishnamma" moviePoster="https://assets.gadgets360cdn.com/pricee/assets/product/202405/Krishnamma_p1_1716203172.jpg?downsize=215:301"/>
        </div>
        <div className='MoviesImg'>
        <MainCard movieTitle="Aa Okkati Adakku" moviePoster="https://assets.gadgets360cdn.com/pricee/assets/product/202404/Aa_Okkati_Adakku_1713955361.jpg?downsize=215:301"/>
        <MainCard movieTitle="Sabari" moviePoster="https://assets.gadgets360cdn.com/pricee/assets/product/202307/Sabari_1689679154.jpg?downsize=215:301"/>
        <MainCard movieTitle="Geethanjali Malli Vachindi" moviePoster="https://assets.gadgets360cdn.com/pricee/assets/product/202404/Geethanjali_Malli_Vachindhi_Poster_1712308553.jpg?downsize=215:301"/>
        <MainCard movieTitle="Tillu Square" moviePoster="https://assets.gadgets360cdn.com/pricee/assets/product/202307/Tillu-Square_1689476491.jpg?downsize=215:301"/>
        <MainCard movieTitle="Om Bheem Bush" moviePoster="https://assets.gadgets360cdn.com/pricee/assets/product/202403/Om_Bheem_Bush_1711089106.jpg?downsize=215:301"/>
        <MainCard movieTitle="Ooru Peru Bhairavakona" moviePoster="https://assets.gadgets360cdn.com/pricee/assets/product/202305/Ooru-Peru-Bhairavakona_1685275710.jpg?downsize=215:301"/>
        </div>
        <div className="anotherSearch">
            <h2>Looking For More Movies? Use Our Search</h2>
            <h3>Thousands of movies in our database & still adding</h3>
            <a href='/Searching'><input className='anotherInput' placeholder='Search..'/></a><button id='anotherButton'></button>
        </div>
        <div className="addOn">
            <h1 className='addOnTitle'>Add-Ons(O)</h1>
            <div className='MoviesImg'>
            <MainCard movieTitle="Bommarillu " moviePoster="https://static.moviecrow.com/movies/0-bommarillu/12510-12507-Bommarillu-Movie-poster-px214.jpg"/>
            <MainCard movieTitle="Okkadu" moviePoster="https://static.moviecrow.com/movies/0-okkadu/11913-11910-Okkadu-2003-Telugu-Movie-Watch-Online1-px214.jpg"/>
            <MainCard movieTitle="RRR" moviePoster="https://1847884116.rsc.cdn77.org/telugu/gallery/movies/rrr2020/poster_rr01.jpg"/>
            <MainCard movieTitle="Manam" moviePoster="https://static.moviecrow.com/movies/0-manam/35258-35255-manam-px214.jpg"/>
            <MainCard movieTitle="Shiva" moviePoster="https://static.moviecrow.com/movies/0-shiva/11767-11764-shiva-dvd-1990-px214.jpg"/>
            <MainCard movieTitle="Arya" moviePoster="https://static.moviecrow.com/movies/913-arya/11420-11417-Arya%20telugu%20movie%20online-px214.jpg"/>
        </div>
        </div>
        <div className="footer">
            <a className='a11'>Contact</a>|<a>DMCA</a>|<a>T&C</a><p className='footerp'>2024 UBOMMA</p>
        </div>
    </>
  )
}

export default homePage