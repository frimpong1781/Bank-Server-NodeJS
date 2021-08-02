// import express, body-parser
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const {
     listBanksController,
     createBankController,
     // updateBankController,
     // deleteBankController,
} = require('./controllers');

//create an express server instance
const server = express();

//middlewares
server.use(bodyParser.json());

//routes
//view banks
server.get('/bank/:id?', listBanksController);

//create bank
server.post('/bank', createBankController);

//update bank
// server.put('/bank', updateBankController);

// //delete bank
// server.delete('/bank', deleteBankController);

//connect to database and start server
mongoose
     .connect(
          'mongodb+srv://codetrainUser:gzfxrare0n99ErYP@cluster0.cv2xm.mongodb.net/codetrain?retryWrites=true&w=majority',
          { useNewUrlParser: true, useUnifiedTopology: true }
     )
     .then((result) => {
          server.listen(3000, () => console.log('server is ready'));
     })
     .catch((err) => console.log(err));
