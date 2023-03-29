import React, { useContext, useState } from 'react';
import IMovie from '../../interfaces/IMovie';
import { MovieMenu } from './MovieMenu/MovieMenu';
import { DropdownMenu } from './DropdownMenu/DropdownMenu';
import { CurrentMovieContext } from '../../context/currentMovie.context';
import defImg from "../../../public/placeholder.png";

import './Movie.scss';

interface MovieProps {
	movie: IMovie;
};

export const Movie = ({movie}: MovieProps) => {
	const [showMenu, setShowMenu] = useState(false);
	const [isOpenDropdownMenu, setIsOpenDropdownMenu] = useState(false);
	const {currentMovie, setCurrentMovie} = useContext(CurrentMovieContext)

	const handleOpenMovieMenu = () => {
		setIsOpenDropdownMenu(!isOpenDropdownMenu)
  }

	const handleCloseDropdownMenu = () => {
		setIsOpenDropdownMenu(false);
	};
	
	return (
	<div>
		<div className='movieCoverWrapper'
			onMouseEnter={() => setShowMenu(true)}
			onMouseLeave={() => setShowMenu(false)}
		>
			<img 
				className='movieCover'
				onClick={() => setCurrentMovie(movie)}
				src={movie.cover} 
				alt={movie.title}
				onError={(e) => {
					e.currentTarget.src = defImg;
				}}
			/>
			{showMenu && !isOpenDropdownMenu && (
				<MovieMenu onClick={handleOpenMovieMenu} />
			)}
			{isOpenDropdownMenu && (
				<DropdownMenu onCloseDropdownMenu={handleCloseDropdownMenu} />
			)}
		</div>

		<div className='movieDetailsContainer'>
			<p className='movieTitle'>{movie.title}</p>
			<p className='movieYear'>{movie.year}</p>
		</div>
		<p className='movieGenres'>{movie.genres}</p>
	</div>
	)
}
