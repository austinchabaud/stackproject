import React, { Component } from 'react';
import axios from 'axios';
import './UserContainer.css';

export default class UserContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			gameUsers: [],
			game: '',
			gameCover: '',
			yearReleased: '',
			company: ''
		};
	}

	componentDidMount() {
		axios.get('/api/allgame').then((response) => {
			console.log(response.data);
			this.setState({
				gameUsers: response.data
			});
		});
	}

	universalInput(property, value) {
		this.setState({
			[property]: value
		});
	}

	submitGameUser() {
		const { game, gameCover, yearReleased, company } = this.state;
		const newGameUser = {
			game,
			gameCover,
			yearReleased,
			company
		};

		axios.post('/api/creategame', newGameUser).then((response) => {
			this.setState({
				gameUsers: response.data,

				game: '',
				gameCover: '',
				yearReleased: '',
				company: ''
			});
		});
	}

	removeGame(id) {
		axios.delete(`/api/endgame/${id}`).then((response) => {
			console.log(response.data);
			this.setState({
				gameUsers: response.data
			});
		});
	}

	updateGame(id, game, gameCover, yearReleased, company) {
		axios.put(`/api/update/${id}`, { game, gameCover, yearReleased, company }).then((response) => {
			this.setState({
				gameUsers: response.data
			});
			console.log('Update button HIT');
		});
	}

	render() {
		const { gameUsers, game, gameCover, yearReleased, company } = this.state;
		const mappedGamers = gameUsers.map((user) => {
			// console.log(user);
			return (
				<div key={user.id}>
					<div>Game: {user.game}</div>
					<div>Company: {user.company}</div>
					<div>Year Released: {user.yearReleased}</div>
					<div>
						<img src={user.gameCover} />
					</div>
					<button onClick={() => this.removeGame(user.id)}>Remove</button>
					<button onClick={() => this.updateGame(user.id)}>Edit</button>
				</div>
			);
		});

		return (
			<div>
				<div>
					<form
						onSubmit={(event) => {
							event.preventDefault();
							this.submitGameUser();
						}}
					>
						<input
							placeholder="Game"
							onChange={(e) => this.universalInput('game', e.target.value)}
							value={game}
						/>
						<input
							placeholder="Game Cover"
							onChange={(e) => this.universalInput('gameCover', e.target.value)}
							value={gameCover}
						/>
						<input
							placeholder="Company"
							onChange={(e) => this.universalInput('company', e.target.value)}
							value={company}
						/>
						<input
							placeholder="Year Released"
							onChange={(e) => this.universalInput('yearReleased', e.target.value)}
							value={yearReleased}
						/>
						<button className="addG">Add Game</button>
					</form>
				</div>
				<div className="contain">{mappedGamers}</div>
			</div>
		);
	}
}
