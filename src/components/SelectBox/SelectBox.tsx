import React from 'react';
import './SelectBox.scss';

export const SelectBox = () => {
	const options = ['Release date', 'Alphabetical'];
	return (
	<div className='sortContainer'>
		<label htmlFor='sortSelect' className='sortBy_label'>Sort by</label>
		<div className='select'>
			<select id="sortSelect">
				{options.map(option => {
					return (
						<option 
							className='sortOption'
							key={options.indexOf(option)}
							value={option}
						>
							{option}
						</option>
					)
				})}
			</select>
		</div>
	</div>
	)
}
