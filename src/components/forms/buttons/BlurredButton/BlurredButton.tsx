import React from 'react';
import "./BlurredButton.scss";

export type ButtonProps = {
  children: string;
	onClick: React.MouseEventHandler<HTMLElement>;
};

export const BlurredButton = ({ children, onClick }: ButtonProps) => {
	return (
		<button className="blurred" onClick={onClick}>{children}</button>
	)
}
