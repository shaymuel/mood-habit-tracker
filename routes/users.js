const routes = require('express').Router();

const usersController = require('../controllers/users');

//gets all users
routes.get('/', usersController.getAllUsers);
//gets user by username
routes.get('/:username', usersController.getUser);
//Add a new user
routes.post('/', usersController.createNewUser);
//Update a user by username
routes.put('/:username', usersController.updateUser);
//Delete a user by username
routes.delete('/:username', usersController.deleteUser);

module.exports = routes;