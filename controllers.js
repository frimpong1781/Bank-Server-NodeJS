const bankModel = require('./module');

//controllers
const listBanksController = (req, res) => {
     //list all banks
     const banks = bankModel.all();
     res.json({ message: 'List of all Banks', data: banks });
};

//create a bank
const createBankController = (req, res) => {
     const { name, location, branch, phone, address, accountNumber } = req.body;
     const bank = new bankModel({
          name,
          location,
          branch,
          phone,
          address,
          accountNumber,
     });

     bank.save();
     res.json({ message: 'Bank created successfully', data: bank });
};

//update bank
const updateBankController = (req, res) => {
     const { name, location, branch, phone, address, accountNumber } = req.body;

     const updatedBank = bankModel.update({
          name,
          location,
          branch,
          phone,
          address,
          accountNumber,
     });

     res.json({
          message: name + ' updated successfully',
          data: updatedBank,
     });
};

//delete bank
const deleteBankController = (req, res) => {
     const { name } = req.body;
     const deletedBank = bankModel.delete({ name });
     res.json({ message: name + ' deleted successfully', data: deletedBank });
};

module.exports = {
     listBanksController,
     createBankController,
     updateBankController,
     deleteBankController,
};
