// import express, body-parser
const express = require('express');
const bodyParser = require('body-parser');

//create a express server instance
const server = express();

//middlewares
server.use(bodyParser.json());

//Database
const banksDb = [];

//Bank model
class bankModel {
     constructor({ name, location, branch, phone, address, accountNumber }) {
          this.name = name;
          this.location = location;
          this.branch = branch;
          this.phone = phone;
          this.address = address;
          this.accountNumber = accountNumber;
     }

     save() {
          banksDb.push(this);
          return this;
     }
     static all() {
          return banksDb;
     }
}
//controllers
const listBanksController = (req, res) => {
     //list all banks
     const banks = bankModel.all();
     res.json({ data: banks });
};

const createBankController = (req, res) => {
     //create a bank
     const { name, location, branch, phone, address, accountNumber } = req.body;
     const bank = new bankModel({
          name,
          location,
          branch,
          phone,
          address,
          accountNumber,
     });

     bank.save;
     res.json({ message: 'created successfully', data: bank });
};

const updateBankController = (req, res) => {
     //update bank
};

const deleteBankController = (req, res) => {
     //delete bank
};
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
