import express from 'express';
const app = express();
import path from 'path';
import formidable from 'formidable';
import fs from 'fs';
import cloudinary from 'cloudinary';
import mongoose from 'mongoose';
import Project from './models/project';

import dotenv from 'dotenv';

// const port = 3000
const PORT = process.env.PORT || 3000;

const mongoAtlasUri = "mongodb+srv://green-baby-poc-1:TZBAJYhUQmuUwptT@cluster0.ihghi.mongodb.net/green-baby-poc-1?retryWrites=true"

mongoose.connect(
  mongoAtlasUri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Mongoose is connected")
);

import expressConfig from './express-config';
expressConfig(app);

import routes from './routes';
routes(app);


app.listen(PORT, () => {
  console.log(`Server Started at 192.168.33.10:${PORT}`)
})



// // ***** Mongoosastic (mongoose + Elasticsearch) setup *****

// Project.createMapping((err, mapping) => {
//   if (err) {
//     console.log('*** Error creating mapping \n');
//     console.log(err);
//   } else {
//     console.log('*** Mapping created \n');
//     console.log(mapping);
//   }
// });

// let stream = Project.synchronize();
// let count = 0;

// stream.on('data', () => {
//   count++;
// });

// stream.on('close', () => {
//   console.log('Indexed ' + count + ' documents');
// });

// stream.on('error', (err) => {
//   console.log('Error occured: \n', err);
// });



// import routes from './routes';
// routes(app);

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server Started at 192.168.33.10:${PORT}`) );
