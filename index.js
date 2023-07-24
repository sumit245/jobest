const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const users = require('./api/users')
const employers = require('./api/employers')
const jobs = require('./api/jobs')
const passport = require('passport');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(passport.initialize());

app.use('/api/employers', employers);
app.use('/api/users', users);
app.use('/api/jobs', jobs);

// Connect to MongoDB   
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Define your routes here

// Start the server
app.listen(port, () => { console.log(`Server started on port ${port}`) });

