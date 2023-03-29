import React from 'react';
import './OutlinedButton.scss';

export type ButtonProps = {
  children: React.ReactNode,
	onClick: React.MouseEventHandler<HTMLElement>;
};

export const OutlinedButton = ({children, onClick}:ButtonProps) => {
	return (
		<button className="outlined" onClick={onClick}>{children}</button>
	)
}
