import React from 'react';
import { BlurredButton } from "../forms/buttons/BlurredButton/BlurredButton";
import { FilledButton } from '../forms/buttons/FilledButton/FilledButton';
import { SearchInput } from '../forms/inputs/SearchInput/SearchInput';
import { Logo } from '../Logo/Logo';
import './Header.scss';

export const Header = () => {
	return (
		<div className='backgroundImage'>
			<header>
				<Logo />
				<BlurredButton>+ Add Movie</BlurredButton>
			</header>
			<div className='searchMainContainer'>
				<p className='findYourMovie'>Find your movie</p>
				<div className='searchSubContainer'>
					<SearchInput placeholder="What do you want to watch?" />
					<FilledButton>Search</FilledButton>
				</div>
			</div>
		</div>
	)
}
