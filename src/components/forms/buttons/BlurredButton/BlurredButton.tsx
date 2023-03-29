import React from 'react';
import "./BlurredButton.scss";

export type ButtonProps = {
  children: string
};

export const BlurredButton = ({children}: ButtonProps) => {
	return (
		<button className="blurred">{children}</button>
	)
}
