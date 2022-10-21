const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
//Models
const { User } = require("../models/user.model");
const { catchAsync } = require("../utils/catchAsync.util");
const { AppError } = require("../utils/appError.util");

dotenv.config({ path: "./config.env" });

const protectSession = catchAsync(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(new AppError("The token was invalid", 403));
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  const user = await User.findOne({
    where: { id: decoded.id, status: "active" },
  });

  if (!user) {
    return next(
      new AppError("The owner of the session is no longer active", 403)
    );
  }
  req.sessionUser = user;
  next();
});

const protectUserAccount = (req, res, next) => {
  const { sessionUser, user } = req;

  if (sessionUser.id !== user.id) {
    return next(new AppError("You are not the owner of this account.", 403));
  }

  next();
};

const protectUserNfts = (req, res, next) => {
  const { sessionUser, nft } = req;

  if (sessionUser.id !== nft.userId) {
    return next(new AppError("This Nft does not belong to you.", 403));
  }

  next();
};

module.exports = { protectUserAccount, protectSession, protectUserNfts };
