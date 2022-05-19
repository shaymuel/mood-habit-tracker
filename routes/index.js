const routes = require('express').Router();

routes.use('/', require('./swagger'));
routes.use('/users', require('./users'));
routes.use('/moods', require('./moods'));

module.exports = routes;