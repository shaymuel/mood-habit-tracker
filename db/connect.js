//env variables
const dotenv = require('dotenv');
dotenv.config();

//database
const MongoClient = require('mongodb').MongoClient;

let _client;
let _usersCollection;
let _moodsCollection;

const initDatabase = () => {
    MongoClient.connect(process.env.MONGODB_URI, (err, client) => {
        if (err) throw err;
        _client = client
        _usersCollection = _client.db("MongoDB").collection("users");
        _moodsCollection = _client.db("MongoDB").collection("moods");
        console.log("Database Connected")
    });
}

const getUsersCollection = () => {

    return _usersCollection;
}

const getMoodsCollection = () => {

    return _moodsCollection;
}

module.exports = {
    initDatabase,
    getUsersCollection,
    getMoodsCollection
};