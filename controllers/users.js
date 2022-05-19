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
            habitName: req.body.habits.habitName,
            build: req.body.habits.build,
            quit: req.body.habits.quit,
            daily: req.body.habits.daily,
            weekly: req.body.habits.weekly,
            monthly: req.body.habits.monthly,
            yearly: req.body.habits.yearly,
            timesPerGoalPeriod: req.body.habits.timesPerGoalPeriod,
            countDone: req.body.habits.countDone,
            backgroundColor: req.body.habits.backgroundColor,
            daysCompleted: [
                req.body.habits.daysCompleted
            ]
        }],
        chosenMoods: [{
            day: req.body.chosenMoods.day,
            moodName: req.body.chosenMoods.moodName
        }]
    }
    const results = await connect.getUsersCollection("users").insertOne(user);
    if (results.acknowledged) {
        res.status(201).json(results);
        console.log('New User Added');
        console.log(`New User Id: ${results.inserted}`);
    } else {
        res.status(500).json(results.error || 'Error occurred.');
    }
}

module.exports = {
    getAllUsers,
    getUser,
    createNewUser
}