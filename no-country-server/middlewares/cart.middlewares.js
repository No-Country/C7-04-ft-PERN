// Models
const { Cart } = require("../models/cart.model");
const { NftInCart } = require("../models/nftInCart.model");

// Utils
const { catchAsync } = require("../utils/catchAsync.util");

const cartIsActive = catchAsync(async (req, res, next) => {
  const { sessionUser } = req;

  let cart = await Cart.findOne({
    where: { userId: sessionUser.id, status: "active" },
    include: {
      model: NftInCart,
      required: false,
      where: { status: "active" },
    },
  });

  if (!cart) {
    cart = await Cart.create({
      userId: sessionUser.id,
    });
  }

  req.cart = cart;

  next();
});

module.exports = { cartIsActive };
