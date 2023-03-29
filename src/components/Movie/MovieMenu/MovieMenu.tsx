import React from 'react';
import './MovieMenu.scss';

interface MovieMenuProps {
	onClick: any;
}

export const MovieMenu = ({onClick}: MovieMenuProps) => {
	return (
		<div onClick={onClick} className='circle'>
			<div className='dot'/>
			<div className='dot'/>
			<div className='dot'/>
		</div>
	)
}
