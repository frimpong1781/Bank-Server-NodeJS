// import express, body-parser
const express = require('express');
const bodyParser = require('body-parser');
const bankModel = require('./module');
const {
     listBanksController,
     createBankController,
     updateBankController,
     deleteBankController,
} = require('./controllers');

//create an express server instance
const server = express();

//middlewares
server.use(bodyParser.json());

//routes
//view banks
server.get('/bank', listBanksController);

//create bank
server.post('/bank', createBankController);

//update bank
server.put('/bank', updateBankController);

//delete bank
server.delete('/bank', deleteBankController);

//start server
server.listen(3000, () => console.log('server is ready'));
