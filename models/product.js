const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Product = new Schema({
  productName: {
    type: String,
  },
});
module.exports = mongoose.model("product", Product);
