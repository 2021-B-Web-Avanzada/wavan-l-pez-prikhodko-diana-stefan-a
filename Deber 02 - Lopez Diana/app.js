const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//CONVERT ON JSON IN THE SCREEN - MIDDLEWARES
app.use(cors());
app.use(bodyParser.json());

//IMPORT ROUTES
const clothingStoreRouter = require('./routes/clothingStore');
app.use('/clothingStore', clothingStoreRouter);

const clothingRouter = require('./routes/clothing');
app.use('/clothingStore', clothingRouter);

// ROUTES
app.get('/', (req, res) =>{
    res.send('We are on home');
});


//CONNECT TO DB
mongoose.connect(
  process.env.DB_CONNECTION, 
  () =>  console.log('connected to DB!')  
);

// HOW WE START LISTENING TO THE SERVER?
app.listen(3000);