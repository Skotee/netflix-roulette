import React, { useState } from 'react';
import IMovie from '../../interfaces/IMovie';
import './Movie.scss';
import { MovieMenu } from './MovieMenu/MovieMenu';
import { DropdownMenu } from './DropdownMenu/DropdownMenu';
import defImg from "../../../public/placeholder.png";

interface MovieProps {
	movie: IMovie;
};

export const Movie = ({movie}: MovieProps) => {
	const [showMenu, setShowMenu] = useState(false);
	const [isOpenDropdownMenu, setIsOpenDropdownMenu] = useState(false);


	const handleOpenMovieMenu = () => {
    console.log('handleOpenMovieMenu');
		setIsOpenDropdownMenu(!isOpenDropdownMenu)
  }

	const handleCloseDropdownMenu = () => {
		console.log('handleCloseDropdownMenu');
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
