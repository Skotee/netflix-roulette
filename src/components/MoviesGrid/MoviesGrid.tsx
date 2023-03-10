import React from "react";
import IMovie from "../../interfaces/IMovie";
import { Movie } from "../Movie/Movie";
import "./MoviesGrid.scss"

export type MoviesGridProps = {
	movieList: IMovie[];
};

export const MoviesGrid = ({ 
    movieList 
}: MoviesGridProps) => {
  
  return (
    <div className="movieGrid-container">
      {movieList.map((movie) => (
       <Movie movie={movie} key={movieList.indexOf(movie)} />
      ))}
    </div>
  )
}
