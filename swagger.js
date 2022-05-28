const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: "Habit & Mood Tracker API",
    description: "Keeps track of habits made and moods felt. Recorded by user",
    version: "1.0.0"
  },
  host: "http://localhost:3000/",
  basePath: "/",
  schemes: ["http"],
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