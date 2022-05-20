const routes = require('express').Router();

const moodsController = require('../controllers/moods');

//gets all moods
routes.get('/', moodsController.getAllMoods);
//gets mood by the mood name
routes.get('/:id', moodsController.getMood);

module.exports = routes;