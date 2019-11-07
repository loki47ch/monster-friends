import React from 'react';

const SearchBox = ({ searchChange }) => {
	return (
		<input className='pa3 ba b--green bg-washed-yellow' type='search' placeholder='Search Monsters' onChange={searchChange} />
	);
}

export default SearchBox;