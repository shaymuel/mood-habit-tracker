const db = require('../models');
const User = db.users;
const passwordValidation = require('../utilities/password-validation');

//create a new user
module.exports.createNewUser = (req, res) => {
  try {
    if (!req.body.username || !req.body.password) {
      res.status(400).send({ message: 'Content can not be empty!' });
      return;
    }
    const password = req.body.password;
    const passwordCheck = passwordValidation.passwordPass(password);
    if (passwordCheck.error) {
      res.status(400).send({ message: passwordCheck.error });
      return;
    }
    const user = new User(req.body);
    user
      .save()
      .then((data) => {
        console.log(data);
        console.log('New user created');
        res.status(201).send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'Error occurred while creating new user.'
        });
      });
  } catch (err) {
    res.status(500).json(err);
  }
};

//get all users from database
module.exports.getAllUsers = (req, res) => {
  try {
    User.find({})
      .then((data) => {
        res.status(200).send(data);
        console.log('All users returned');
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'Error occurred while fetching all users.'
        });
      });
  } catch (err) {
    res.status(500).json(err);
  }
};

//get single user from database based on username
module.exports.getUser = (req, res) => {
  try {
    const username = req.params.username;
    User.find({ username: username })
      .then((data) => {
        res.status(200).send(data);
        console.log('User returned')
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'Error occurred while fetching users.'
        });
      });
  } catch (err) {
    res.status(500).json(err);
  }
};

//update a user by username 
module.exports.updateUser = async (req, res) => {
  try {
    const username = req.params.username;
    if (!username) {
      res.status(400).send({ message: 'Username is not valid: try again' });
      return;
    }
    const password = req.body.password;
    const passwordCheck = passwordValidation.passwordPass(password);
    if (passwordCheck.error) {
      res.status(400).send({ message: passwordCheck.error });
      return;
    }
    User.findOne({ username: username }, function (err, user) {
      user.username = req.params.username;
      user.email = req.body.email;
      user.phoneNumber = req.body.phoneNumber;
      user.password = req.body.password;
      user.habitTracker = req.body.habitTracker;
      user.chosenMoods = req.body.chosenMoods;
      user.save(function (err) {
        if (err) {
          res.status(500).json(err || 'Error occurred while updating the contact.');
        } else {
          res.status(204).send();
        }
      });
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

//delete a user by username
module.exports.deleteUser = async (req, res) => {
  try {
    const username = req.params.username;
    if (!username) {
      res.status(400).send({ message: 'Username is not valid: try again' });
      return;
    }
    User.deleteOne({ username: username }, function (err, result) {
      if (err) {
        res.status(500).json(err || 'Error occurred while deleting the contact.');
      } else {
        res.status(204).send(result);
      }
    });
  } catch (err) {
    res.status(500).json(err || 'Error occurred while deleting the contact.');
  }
};