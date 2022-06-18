const routes = require('express').Router();

const moodsController = require('../controllers/moods');

//gets all moods
routes.get('/', moodsController.getAllMoods);

module.exports = routes;