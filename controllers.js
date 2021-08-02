const bankModel = require('./model');

//controllers
const listBanksController = (req, res) => {
     //list all banks
     const { id } = req.params;

     if (id) {
          bankModel
               .find({ _id: id })
               .then((banks) => {
                    res.json({ message: 'Listed Specific Bank', data: banks });
               })
               .catch((error) => console.log(error));
     } else {
          bankModel
               .find()
               .then((banks) => {
                    res.json({ message: 'List of all Banks', data: banks });
               })
               .catch((error) => console.log(error));
     }
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

     bank.save()
          .then((result) => {
               res.json({ message: 'Bank created successfully', data: result });
          })
          .catch((error) => console.log(error));
};

//update bank
// const updateBankController = (req, res) => {
//      const { name, location, branch, phone, address, accountNumber } = req.body;

//      const updatedBank = bankModel.update({
//           name,
//           location,
//           branch,
//           phone,
//           address,
//           accountNumber,
//      });

//      res.json({
//           message: name + ' updated successfully',
//           data: updatedBank,
//      });
// };

//delete bank
// const deleteBankController = (req, res) => {
//      const { name } = req.body;
//      const deletedBank = bankModel.delete({ name });
//      res.json({ message: name + ' deleted successfully', data: deletedBank });
// };

module.exports = {
     listBanksController,
     createBankController,
     // updateBankController,
     // deleteBankController,
};
