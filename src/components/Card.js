import React from 'react';

const Card = ({ id, name, email }) => {
	return (
		<div className='tc bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt= 'robot' src={`https://robohash.org/${id}?set=set2&size=150x150`} />
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
	);
}

export default Card;