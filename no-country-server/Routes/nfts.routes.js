const express = require("express");
const {
  getAllNfts,
  getOneNft,
  getAllCategories,
  createNft,
  createCategory,
  updateCategory,
  updateMyNft,
  deleteMyNft,
} = require("../controllers/nfts.controllers");
const {
  protectSession,
  protectUserNfts,
} = require("../middlewares/auth.middlewares");
const { categoryExist } = require("../middlewares/category.middlewares");
const { nftExist } = require("../middlewares/nft.middlewares");
const {
  createNftValidations,
} = require("../middlewares/validators.middlewares");
const { upload } = require("../utils/multer.util");

const nftsRouter = express.Router();
//Non protected

nftsRouter.get("/", getAllNfts);
nftsRouter.get("/categories", getAllCategories);
nftsRouter.get("/:id", nftExist, getOneNft);

//Ptotected
nftsRouter.use(protectSession);
nftsRouter.post("/categories", createCategory);
nftsRouter.post(
  "/",
  upload.array("nftImg", 5),
  createNftValidations,
  createNft
);
nftsRouter.patch("/categories/:id", categoryExist, updateCategory);
nftsRouter.patch("/:id", nftExist, protectUserNfts, updateMyNft);
nftsRouter.delete("/:id", nftExist, protectUserNfts, deleteMyNft);

module.exports = { nftsRouter };
