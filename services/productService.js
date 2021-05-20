const Product = require("../models/product");
const Stock = require("../models/stock");
const WareHouse = require("../models/wareHouse");
var ProductInfo = require("../infos/poductInfos");
//ADD PRODUCT
exports.CreateProduct = async (req, res, next) => {
  console.log("PRODUCT", req.body);
  const newproduct = new Product({
    productName: req.body.ProductName,
  });
  newproduct
    .save(newproduct)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating ",
      });
    });
};
// get Products
exports.getAllProducts = async (req, res, next) => {
  Product.find()

    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving .",
      });
    });
};
exports.CreateWareHouse = async (req, res, next) => {
  const newwareHouse = new WareHouse({
    wareHouseName: req.body.wareHouseName,
  });
  newwareHouse
    .save(newwareHouse)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating ",
      });
    });
};
exports.getAllWareHouse = async (req, res, next) => {
  WareHouse.find()

    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving .",
      });
    });
};
exports.CreateStock = async (req, res, next) => {
  console.log(req, "eqq");
  const newStock = new Stock({
    productId: req.body.productId,
    wareHouseNumber: req.body.wareHouseNumber,
    Quantity: req.body.Quantity,
  });
  newStock
    .save(newStock)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating ",
      });
    });
};
exports.getStock = async (req, res, next) => {
  Stock.find()

    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving .",
      });
    });
};
