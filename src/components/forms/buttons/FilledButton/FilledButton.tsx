import React from 'react';
import "./FilledButton.scss";

export type ButtonProps = {
  children: React.ReactNode,
};

export const FilledButton = ({children}:ButtonProps) => {
	return (
		<button className="filled">{children}</button>
	)
}
