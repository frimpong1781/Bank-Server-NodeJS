// let banksDb = require('./db');
const mongoose = require('mongoose');

const bankSchema = new mongoose.Schema({
     name: String,
     location: String,
     branch: String,
     phone: String,
     address: String,
     accountNumber: String,
});

const bankModel = mongoose.model('Bank', bankSchema);

module.exports = bankModel;
