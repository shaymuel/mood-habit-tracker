const db = require('../models');
const Mood = db.moods;

//controller to find all moods in database
module.exports.getAllMoods = (req, res) => {
  try {
    Mood.find({})
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'Some error occurred while retrieving users.'
        });
      });
  } catch (err) {
    res.status(500).json(err);
  }
};