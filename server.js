const express = require('express');
const mongoose = require('mongoose');
const setupRoutes = require("./routes/routes");

const Register = require('./register/register');
const User = require('./users/User');

mongoose 
    .connect('mongodb://localhost/authdb')
    .then(conn => {
        console.log('\n=== connected to mongo db ===\n');
    })
    .catch(err => console.log('error connecting to db', err));

const server = express();
server.use(express.json());
setupRoutes(server);

server.listen(5000, () => console.log(`\n=== api running on port 5000 ===\n`));