import React, { Component, Fragment } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			searchField: '',
			monsters: []
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => {this.setState({ monsters: users })}); 
	}

	onSearchChange = (event) => {
		this.setState({ searchField: event.target.value})
	}

	render() {
		const { monsters, searchField } = this.state;

		const filteredMonsters = monsters.filter(monster => {
			return monster.name.toLowerCase().includes(searchField.toLowerCase())
		})
		return !monsters.length ?
		 <h1 className='f1 dark-red pa3'>Loading...</h1> :
		(
			<Fragment>
				<div className='tc mb3 flexwrap h-25'>
					<h1 className='f1 dark-red'>Monster-Friends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
				</div>
				<div className='tc'>
					<ErrorBoundary>
						<CardList monsters={filteredMonsters}/>
					</ErrorBoundary>
				</div>
			</Fragment>
		);
	}
}

export default App;