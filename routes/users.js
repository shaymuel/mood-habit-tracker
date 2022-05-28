const routes = require('express').Router();

const usersController = require('../controllers/users');

//gets all users
routes.get('/', usersController.getAllUsers);
//gets mood by the mood name
routes.get('/:username', usersController.getUser);
//Add a new user
routes.post('/', usersController.createNewUser);
//Update a user
routes.put('/:username', usersController.updateUser);
//Delete a user
routes.delete('/:username', usersController.deleteUser);

module.exports = routes;