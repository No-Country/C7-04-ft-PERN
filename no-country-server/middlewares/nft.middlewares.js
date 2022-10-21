const { Nft } = require("../models/nft.model");
const { AppError } = require("../utils/appError.util");
const { catchAsync } = require("../utils/catchAsync.util");

const nftExist = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const nft = await Nft.findOne({ where: { id } });

  if (!nft) {
    return next(new AppError("Nft not found", 404));
  }

  req.nft = nft;
  next();
});

module.exports = { nftExist };
