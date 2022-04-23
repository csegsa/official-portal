// server/index.js
import { dirname, join, resolve } from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import 'dotenv/config';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from "mongoose";
import eventsRouter from './routes/events.js';
import jobsRouter from './routes/jobs.js' ;

const app = require('express')();
const path = require('path');
const mongoose = require('mongoose');
const url = require('url');
const cors = require('cors');
const bodyParser = require('body-parser');
const eventsRouter = require('./routes/events.js');

require('dotenv').config();

app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cors());

const dirname = path.dirname(url.fileURLToPath(require("meta").url));
console.log(dirname);
console.log(path.resolve(dirname, '../client/build'));
// Have Node serve the files for our built React app
app.use(express.static(resolve(__dirname, '../client/build')));

// Handle GET requests to /api route
app.use('/api/events', eventsRouter);
app.use('/api/jobs', jobsRouter) ;

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(resolve(__dirname, '../client/build', 'index.html'));
});


const CONNECT_URL = process.env.MONGODB_CONNECTION_STRING;
const PORT = process.env.PORT || 5000;



try {
  await mongoose.connect(CONNECT_URL, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
} catch (err) {
  console.log("Error connecting to MongoDB");
  console.log(CONNECT_URL);
}
