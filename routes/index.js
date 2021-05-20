var express = require("express");
var router = express.Router();
const Product = require("../models/product");
/* GET home page. */
router.get("/", function (req, res, next) {
  let products = Product.find()

    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving .",
      });
    });
  res.render("index", { title: "Express" });
});

module.exports = router;
