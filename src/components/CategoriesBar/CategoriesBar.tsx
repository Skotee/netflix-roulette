import React from 'react';
import './CategoriesBar.scss';

export const CategoriesBar = () => {
	const categories = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];
		return (
			<ul className='listOfCategories'>
				{categories.map(category => {
					return (
						<li key={categories.indexOf(category)}>
							<a href='#'>
								{category}
							</a>
						</li>
					)
				})}
			</ul>
		)
}
