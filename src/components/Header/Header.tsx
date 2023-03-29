import React, { useState, createContext, useContext } from 'react';
import { createPortal } from 'react-dom';

import MovieInfo from '../MovieInfo/MovieInfo'
import { BlurredButton } from "../forms/buttons/BlurredButton/BlurredButton";
import { FilledButton } from '../forms/buttons/FilledButton/FilledButton';
import { SearchInput } from '../forms/inputs/SearchInput/SearchInput';
import { Logo } from '../Logo/Logo';
import ModalContent from '../ModalContent/ModalContent';
import MovieEditAddForm from "../forms/MovieEditAddForm/MovieEditAddForm";
import './Header.scss';
import IMovie from '../../interfaces/IMovie';

export const Header = () => {
	const [showModal, setShowModal] = useState(false);
	const mainContainerNode = document.getElementById('mainContainer')!;

	return (
		<>
			{showModal &&
				createPortal(
					<ModalContent title={'Add'} onClose={() => setShowModal(false)}>
						<MovieEditAddForm onClose={() => setShowModal(false)} />
					</ModalContent>,
					mainContainerNode
			)}

			<div className='backgroundImage'>
				<header>
					<Logo />
					<BlurredButton onClick={() => setShowModal(true)}>+ Add Movie</BlurredButton>
				</header>
				<div className='searchMainContainer'>
					<p className='findYourMovie'>Find your movie</p>
					<div className='searchSubContainer'>
						<SearchInput placeholder="What do you want to watch?" />
						<FilledButton onClick={()=> {console.log('search button clicked')}}>Search</FilledButton>
					</div>
				</div> 
			</div>
		</>
	)
}
