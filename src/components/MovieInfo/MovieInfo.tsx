import React from "react"

import { CurrentMovieContext } from "../../context/currentMovie.context";
import { Logo } from "../Logo/Logo";
import defImg from "../../../public/placeholder.png";

import "./MovieInfo.scss"

const MovieInfo = ()  => {
  const {currentMovie, setCurrentMovie} = React.useContext(CurrentMovieContext);

  if (!currentMovie) {
    return null; // or show a loading state
  }
  
  const { cover, title, rate, genres, overview, year, runtime } = currentMovie;

  return(
    <>
      <div className="movieInfoMainContainer">
        <div className="mainMargin">
          <div className="upperBar">
            <Logo />
            <button className='searchButton' type="button" onClick={() => setCurrentMovie(undefined)}>
              <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="18.5" cy="10.5" r="9.5" stroke="#F65261" strokeWidth="2"/>
                <path d="M10.5 19.5L1.5 28.5" stroke="#F65261" strokeWidth="2" strokeLinecap="square"/>
              </svg>
            </button>
          </div>
          <div className="movieInfoFlexContainer">
            <img 
              className='movieCover'
              src={cover || defImg} 
              alt={title}
              onError={(e) => {
                e.currentTarget.src = defImg;
              }}
            />
            <div className="movieInfoContainer">
              <>
                <div className="row smallGap">
                  <p className="movieInfoTitle">{title}</p>
                  <p className="movieInfoRate">{rate}</p>
                </div>
                <p className="movieGenres">{genres}</p>
                <div className="row">
                  <p className="redText">{year}</p>
                  <p className="redText">{runtime}</p>
                </div>
              </>
              <div className="movieOverviewContainer">
                <p>{overview}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieInfo;