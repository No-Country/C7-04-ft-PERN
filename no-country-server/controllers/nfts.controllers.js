//models
const { Category } = require("../models/category.model");
const { Nft } = require("../models/nft.model");
const { NftImg } = require("../models/nftImg.model");
const { AppError } = require("../utils/appError.util");
const { catchAsync } = require("../utils/catchAsync.util");

//utils
const { getNftsImgsUrls, uploadNftImgs } = require("../utils/firebase.util");

const getAllNfts = catchAsync(async (req, res, next) => {
  const nfts = await Nft.findAll({
    where: { status: "active" },
    include: { model: NftImg },
  });

  const nftsWithImgs = await getNftsImgsUrls(nfts);

  if (nfts[0] === undefined) {
    return next(new AppError("There are not nfts available", 404));
  }

  res.status(200).json({
    status: "success",
    data: { nfts: nftsWithImgs },
  });
});

const getOneNft = catchAsync(async (req, res, next) => {
  const { nft } = req;

  res.status(200).json({
    status: "success",
    data: { nft },
  });
});

const getAllCategories = catchAsync(async (req, res, next) => {
  const categories = await Category.findAll({ where: { status: "active" } });

  res.status(200).json({
    status: "success",
    data: { categories },
  });
});

const createNft = catchAsync(async (req, res, next) => {
  const { sessionUser } = req;
  const { title, description, price, categoryId, quantity } = req.body;

  const newNft = await Nft.create({
    title,
    description,
    quantity,
    price,
    categoryId,
    userId: sessionUser.id,
  });

  await uploadNftImgs(req.files, newNft.id);

  res.status(201).json({
    status: "success",
    data: { newNft },
  });
});

const updateMyNft = catchAsync(async (req, res, next) => {
  const { title, description, price, quantity } = req.body;
  const { nft } = req;

  await nft.update({
    title,
    description,
    price,
    quantity,
  });

  res.status(200).json({
    status: "success",
    data: { nft },
  });
});

const deleteMyNft = catchAsync(async (req, res, next) => {
  const { nft } = req;

  await nft.update({ status: "deleted" });

  res.status(204).json({
    status: "success",
  });
});

const createCategory = catchAsync(async (req, res, next) => {
  const { name } = req.body;

  const newCategory = await Category.create({ name });

  res.status(201).json({
    status: "success",
    data: { newCategory },
  });
});

const updateCategory = catchAsync(async (req, res, next) => {
  const { category } = req;
  const { name } = req.body;

  await category.update({ name });

  res.status(200).json({
    status: "success",
    data: { category },
  });
});

module.exports = {
  getAllNfts,
  getOneNft,
  getAllCategories,
  createNft,
  updateMyNft,
  deleteMyNft,
  createCategory,
  updateCategory,
};
