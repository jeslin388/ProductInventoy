require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const productService = require("../services/productService");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const router = new express.Router();
router.post("/addProduct", productService.CreateProduct);
router.get("/getProducts", productService.getAllProducts);
router.post("/addWareHouse", productService.CreateWareHouse);
router.get("/getWareHouse", productService.getAllWareHouse);
router.post("/createStock", productService.CreateStock);
router.get("/getStock", productService.getStock);
module.exports = router;
