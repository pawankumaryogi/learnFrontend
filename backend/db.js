const mongoose = require("mongoose");
require("dotenv").config();

const connection = mongoose.connect("mongodb+srv://neeravkhatri:neeravkhatri@cluster0.dcucben.mongodb.net/Unstop?retryWrites=true&w=majority");

module.exports = { connection };