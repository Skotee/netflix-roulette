import React from 'react';
import './PasswordInput.scss';

export const PasswordInput = () => {
	return (
		<>
			<label htmlFor="pass">Password*</label>
			<input id="pass" type='password' required></input>
		</>
	)
}
