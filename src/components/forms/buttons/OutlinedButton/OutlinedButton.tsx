import React from 'react';
import './OutlinedButton.scss';

export type ButtonProps = {
  children: string
};

export const OutlinedButton = ({children}:ButtonProps) => {
	return (
		<button className="outline effect">{children}</button>
	)
}
