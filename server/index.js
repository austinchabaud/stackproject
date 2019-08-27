const express = require('express');
const data = require('./data.json');
const app = express();
const controller = require('./ controller');

// allows body requests (i.e. req.body)
app.use(express.json());

app.get('/api/allgame', controller.getAllGames);

// app.get('/api/getgame/:id', controller.getGameById);

app.post('/api/creategame', controller.postGame);

app.put('/api/update/:id', controller.updateGame);

app.delete('/api/endgame/:id', controller.removeGame);

const port = 9005;
app.listen(port, () => console.log(`👂 ${9005}`));
