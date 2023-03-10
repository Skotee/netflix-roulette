import React from "react";
import { CategoriesBar } from "../../components/CategoriesBar/CategoriesBar";
import { Header } from "../../components/Header/Header";
import { Logo } from "../../components/Logo/Logo";
import { MoviesGrid } from "../../components/MoviesGrid/MoviesGrid";
import { SelectBox } from "../../components/SelectBox/SelectBox";
import IMovie from "../../interfaces/IMovie";
import data from '../../mockData/movies.js';

import "./Home.scss";

export const Home = () => {
  // const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);

  const movies = data as IMovie[];

  return (
    <>
      <Header />
      <div className="moviesContainer">
        <div className="mainMargin">
          <div className="categoriesNavContainer">
            <CategoriesBar/>
            <SelectBox />
          </div>
          <p><span className="numberBolder">{data.length}</span> movies found</p>
          {/* {(!isLoading || !isError) && ( */}
            <MoviesGrid movieList={movies}></MoviesGrid>
          {/* )} */}
          </div>
      </div>
      <footer className="footer">
        <Logo />
      </footer>
    </>
  );
};

