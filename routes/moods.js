const routes = require('express').Router();

const moodsController = require('../controllers/moods');

//gets all moods
routes.get('/', moodsController.getAllMoods);
//gets mood by the mood name
routes.get('/:moodname', moodsController.getMood);

module.exports = routes;