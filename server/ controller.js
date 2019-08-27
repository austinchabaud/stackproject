const data = require('./data.json');
let userId = 2;
module.exports = {
	postGame: (req, res, next) => {
		const { game, gameCover, yearReleased, company } = req.body;
		const newGame = {
			id: userId++,
			game,
			gameCover,
			yearReleased,
			company
		};
		data.push(newGame);
		res.status(200).send(data);
	},
	getAllGames: (req, res, next) => {
		res.status(200).send(data);
	},

	updateGame: (req, res, next) => {
		const { id, game, gameCover, yearReleased, company } = req.body;
		// const { update_game } = req.body;
		const updateID = req.params.id;

		const index = data.findIndex((game) => {
			return game.id === parseInt(id);
		});
		if (index !== -1) {
			data[index] = {
				id: updateID,
				game: game,
				gameCover: gameCover,
				yearReleased: yearReleased,
				company: company
			};
			res.status(200).send(data);
		}
	},

	removeGame: (req, res, next) => {
		const { id } = req.params;
		const index = data.findIndex((game) => {
			return game.id === parseInt(id);
		});
		if (index !== -1) {
			data.splice(index, 1);
		}
		console.log(id, index);
		res.status(200).send(data);
	}
};
