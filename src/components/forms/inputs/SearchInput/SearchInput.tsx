import React from 'react';
import "./SearchInput.scss";

export type SearchInputProps = {
	placeholder: string;
  };

export const SearchInput = ({placeholder}: SearchInputProps) => {
	return (
		<input id="searchbar" type='text' placeholder={placeholder}></input>
	)
}
