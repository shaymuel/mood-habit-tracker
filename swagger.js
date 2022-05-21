const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: "Habit & Mood Tracker API",
    description: "Keeps track of habits made and moods felt. Recorded by user",
    version: "1.0.0"
  },
  host: "habit-mood-tracker.herokuapp.com",
  basePath: "/",
  schemes: ["https"],
  tags: [
    {
      name: "moods",
      description: "Operations for moods"
    },
    {
      name: "user",
      description: "Operations for users"
    }
  ]
};


const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);