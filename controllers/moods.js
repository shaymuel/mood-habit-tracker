const db = require('../models');
const Mood = db.moods;

exports.getAllMoods = (req, res) => {
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

exports.getMood = (req, res) => {
  try {
    const moodName = req.params.moodName;
    Mood.find({
        moodName: moodName
      })
      .then((data) => {
        if (!data) res.status(404).send({
          message: 'No Mood found with moodName: ' + moodName
        });
        else res.send(data[0]);
      })
      .catch((err) => {
        res.status(500).send({
          message: 'Error retrieving Mood with moodName=' + moodName,
          error: err
        });
      });
  } catch (err) {
    res.status(500).json(err);
  }
};