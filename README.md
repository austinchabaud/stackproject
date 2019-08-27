# Game Database

## frontend checklist

- reset.css
- package.json
  - main => server

**Proxy**
src/setupProxy.js

```js
const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(proxy("/api", { target: "http://localhost:4300/" });
};
```

### folder-structure

- src/
  - index.js
  - App.js
  - reset.css
  - App.css
  - setupProxy.js
  - components/
    - Header/
      - Header.js **search bar**
      - Header.css
    - Catagories/
      - Catagories.js **where game images and details will be**
      - Catagories.css
    - List/
      - List.css
      - List.js **this is where crud will be mainly**

# dependencies

- `react-icons`
- `axios`

## backend checklist

# dependencies

- `express`

### data

```js
{
    gameName: String,
    year: Number,
    totalPlayers: Number,
    developer: String
}
```

### endpoints

- get: ( get all games ) `/api/games`

- getById: ( get single game ) `/api/videogame`

- post: ( create comment on game) `/api/comment`

- put: ( update comment ) `/api/editcomment`

- delete: ( delete comment ) `/api/deletecomment`

### folder-structure

- server/
  - index.js
  - data.js
  - controller/
    - gameController.js

### CRUD checklist

- Create(Get): Search data from IGDB
- Read(Post): Make a comment or add a game to new list
- Update(Put): Update your game type/comment
- Delete: Delete comment/game
