import React from 'react';
import "./EmailInput.scss";

export type EmailInputProps = {
	children: string
  };

export const EmailInput = ({children}:EmailInputProps) => {
	return (
		<>
			<label htmlFor="email">{children}</label>
			<input id="email" type='email' required></input>
		</>
	)
}
