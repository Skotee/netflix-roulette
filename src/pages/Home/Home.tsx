import React, { useEffect, useState } from "react";

import { CategoriesBar } from "../../components/CategoriesBar/CategoriesBar";
import { Header } from "../../components/Header/Header";
import { Logo } from "../../components/Logo/Logo";
import MovieInfo from "../../components/MovieInfo/MovieInfo";
import { MoviesGrid } from "../../components/MoviesGrid/MoviesGrid";
import { SelectBox } from "../../components/SelectBox/SelectBox";
import { CurrentMovieContext } from "../../context/currentMovie.context";
import IMovie from "../../interfaces/IMovie";
import data from '../../mockData/movies.js';

import "./Home.scss";

export const Home = () => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);

  const [currentMovie, setCurrentMovie] = useState<IMovie>();
  const movies = data as IMovie[];
  
  useEffect(() => {
    console.log("use effect is triggered");
  }, []);
  
  return (
    <>
      <CurrentMovieContext.Provider value={{currentMovie, setCurrentMovie}}>
        {!currentMovie ? <Header /> : <MovieInfo />}
        <div className="moviesContainer">
          <div className="mainMargin">
            <div className="categoriesNavContainer">
              <CategoriesBar/>
              <SelectBox />
            </div>
            <p>
              <span className="numberBolder">{data.length}</span> movies found
            </p>
            <MoviesGrid movieList={movies} />
          </div>
        </div>
      </CurrentMovieContext.Provider>
      <footer className="footer">
        <Logo />
      </footer>
    </>
  );
};

