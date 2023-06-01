

const PokeController = require('../controllers/poke.controller');  //Import the code from Code Block 1
module.exports = (app) => {
    app.get('/api', PokeController.index);
}