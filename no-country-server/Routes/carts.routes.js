const express = require("express");

//middlewares
const { protectSession } = require("../middlewares/auth.middlewares");

//controllers
const {
  addNftToCart,
  updateNftOnCart,
  deleteNftFromCart,
  purchaseTheCart,
} = require("../controllers/carts.controller");

const cartsRouter = express.Router();

//Protected
cartsRouter.use(protectSession);
cartsRouter.post("/add-nft", addNftToCart);
cartsRouter.patch("/update-cart", updateNftOnCart);
cartsRouter.post("/purchase", purchaseTheCart);
cartsRouter.delete("/:nftId", deleteNftFromCart);

module.exports = { cartsRouter };
