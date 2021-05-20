const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const WareHouse = new Schema({
  wareHouseName: {
    type: String,
  },
  wareHouseNumber: {
    type: Number,
  },
});
module.exports = mongoose.model("wareHouse", WareHouse);
