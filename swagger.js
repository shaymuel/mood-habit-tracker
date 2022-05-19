const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Habit & Mood Tracker API',
    description: 'Keeps track of habits made and moods felt. Recorded by user',
  },
  host: 'habit-mood-tracker.herokuapp.com',
  schemes: ['https'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);