import React from 'react';
import './DropdownMenu.scss';
import { DropdownMenuItem } from "./DropdownMenuItem/DropdownMenuItem";
import closeIcon from "../../../../public/x.svg";

interface DropdownMenuProps {
	onCloseDropdownMenu: any;
};

export const DropdownMenu = ({onCloseDropdownMenu}: DropdownMenuProps) => {
	return (
		<ul className='dropdownMenuList'>
			<li>
				<img 
					onClick={() => onCloseDropdownMenu()}
					className='closeIcon'
					src={closeIcon} 
					alt="Close icon" 
				/>
			</li>
			<li>Edit</li>
			<li>Delete</li>
		</ul>
	)
}
