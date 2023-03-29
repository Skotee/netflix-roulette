import React from 'react';
import "./FilledButton.scss";

export type ButtonProps = {
  children: React.ReactNode,
	onClick: React.MouseEventHandler<HTMLElement>;
};

export const FilledButton = ({ children, onClick }:ButtonProps) => {
	return (
		<button className="filled" onClick={onClick}>{children}</button>
	)
}
