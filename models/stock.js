const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Stock = new Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
    require: true,
  },
  wareHouseNumber: {
    type: Number,
  },
  Quantity: {
    type: Number,
  },
});
module.exports = mongoose.model("stock", Stock);
