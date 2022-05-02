// server/index.js
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import 'dotenv/config';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from "mongoose";
import eventsRouter from './routes/events.js';
import jobsRouter from './routes/jobs.js' ;
import rolesRouter from './routes/roles.js';
import config from "./config/index.js";

const app = express();

app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());

const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname);
console.log(resolve(__dirname, '../client/build'));
// Have Node serve the files for our built React app
app.use(express.static(resolve(__dirname, '../client/build')));

// Handle GET requests to /api route
app.use('/api/events', eventsRouter);
app.use('/api/jobs', jobsRouter) ;
app.use('/api/roles', rolesRouter) ;

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(resolve(__dirname, '../client/build', 'index.html'));
});


try {
  await mongoose.connect(config.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log("Connected to MongoDB");
  app.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}`);
  });
} catch (err) {
  console.log("Error connecting to MongoDB");
  console.log(config.MONGO_URI);
}
