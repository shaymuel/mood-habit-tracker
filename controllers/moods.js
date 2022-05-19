const connect = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAllMoods = async (req, res) => {
    const results =  await connect.getMoodsCollection("moods").find();
    results.toArray().then((documents) => {
        res.status(200).json(documents);
        console.log('All Moods Returned');
      });
}

const getMood = async (req, res) => {
    const moodName = new ObjectId(req.params.moodName)
    const results = connect.getMoodsCollection("moods").find({_moodName: moodName});
    results.toArray().then((documents) => {
      res.status(200).json(documents[0]);
      console.log('Mood Returned');
    });

}

module.exports = {
    getAllMoods,
    getMood
}