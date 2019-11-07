import React from 'react';
import Card from './Card';

const CardList = ({ monsters }) => {
	return (
		<div className='pa3 flex-wrap'>
			{
				monsters.map((monster, i) => {
					return <Card key={monsters[i].id} id={monsters[i].id} name={monsters[i].name} email={monsters[i].email} />
				})
			}
		</div>
	);
}

export default CardList;