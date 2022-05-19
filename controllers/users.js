const connect = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

//get all users from database
const getAllUsers = async (req, res) => {
    const results = await connect.getUsersCollection("users").find();
    results.toArray().then((documents) => {
        res.status(200).json(documents);
        console.log('All Users Returned');
    });
}

//get single user from database based on username
const getUser = async (req, res) => {
    const username = new ObjectId(req.params.username)
    const results = connect.getUsersCollection("users").find({
        _username: username
    });
    results.toArray().then((documents) => {
        res.status(200).json(documents[0]);
        console.log('One User Returned');
    });

}

//create new user and send to database
const createNewUser = async (req, res) => {
    const user = {
        username: req.body.username,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        password: req.body.password,
        habits: [{
            habitName: req.body.habitName,
            build: req.body.build,
            quit: req.body.quit,
            daily: req.body.daily,
            weekly: req.body.weekly,
            monthly: req.body.monthly,
            yearly: req.body.yearly,
            timesPerGoalPeriod: req.body.timesPerGoalPeriod,
            countDone: req.body.countDone,
            backgroundColor: req.body.backgroundColor,
            daysCompleted: [
                req.body.daysCompleted
            ]
        }],
        chosenMoods: [{
            day: req.body.day,
            moodName: req.body.moodName
        }]
    }
    const results = await connect.getUsersCollection("users").insertOne(user);
    if (results.acknowledged) {
        res.status(201).json(results);
        console.log('New User Added');
    } else {
        res.status(500).json(results.error || 'Error occurred.');
    }
}

module.exports = {
    getAllUsers,
    getUser,
    createNewUser
}