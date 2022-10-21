const { Cart } = require("../models/cart.model");
const { Nft } = require("../models/nft.model");
const { NftInCart } = require("../models/nftInCart.model");
const { AppError } = require("../utils/appError.util");
const { catchAsync } = require("../utils/catchAsync.util");
const { Order } = require("../models/order.model");

const addNftToCart = catchAsync(async (req, res, next) => {
  const { sessionUser } = req;
  const { nftId, quantity } = req.body;

  const nft = await Nft.findOne({
    where: { id: nftId, status: "active" },
  });

  if (!nft) {
    return next(new AppError("Nft not found", 404));
  } else if (quantity > nft.quantity) {
    return next(new AppError(`this Nft only has ${nft.quantity} items,`, 400));
  }

  const cart = await Cart.findOne({
    where: { userId: sessionUser.id, status: "active" },
  });

  if (!cart) {
    const newCart = await Cart.create({ userId: sessionUser.id });

    await NftInCart.create({
      cartId: newCart.id,
      nftId,
      quantity,
    });
  } else {
    const nftInCart = await NftInCart.findOne({
      where: { nftId, cartId: cart.id },
    });

    if (!nftInCart) {
      await NftInCart.create({ cartId: cart.id, nftId, quantity });
    } else if (nftInCart.status === "active") {
      return next(new AppError("this nft is already in your cart", 400));
    } else if (nftInCart.status === "removed") {
      await nftInCart.update({ status: "active", quantity });
    }
  }
  res.status(200).json({
    status: "success",
  });
});
const updateNftOnCart = catchAsync(async (req, res, next) => {
  const { sessionUser } = req;

  const { newQty, nftId } = req.body;

  const cart = await Cart.findOne({
    where: { userId: sessionUser.id, status: "active" },
  });

  if (!cart) {
    return next(new AppError("you dont have any active cart", 400));
  }

  const nft = await Nft.findOne({
    where: { id: nftId, status: "active" },
  });

  if (!nft) {
    return next(new AppError("Nft not found", 404));
  } else if (newQty > nft.quantity) {
    return next(new AppError(`this nft only has ${nft.quantity} items,`, 400));
  } else if (0 > newQty) {
    return next(new AppError("cant send negative values", 400));
  }

  const nftInCart = await NftInCart.findOne({
    where: { cartId: cart.id, nftId, status: "active" },
  });

  if (!nftInCart) {
    return next(new AppError("This Nft is not in your cart", 404));
  }

  if (newQty === 0) {
    await nftInCart.update({ quantity: 0, status: "removed" });
  } else if (newQty > 0) {
    await nftInCart.update({ quantity: newQty });
  }

  res.status(200).json({
    status: "success",
  });
});

const purchaseTheCart = catchAsync(async (req, res, next) => {
  const { sessionUser } = req;

  const cart = await Cart.findOne({
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

  let totalPrice = 0;

  const nftsInCartPromises = cart.nftInCarts.map(async (nftInCart) => {
    const nft = await Nft.findOne({
      where: { id: nftInCart.nftId },
    });

    const subTotal = nft.price * nftInCart.quantity;

    const newQuantity = nft.quantity - nftInCart.quantity;

    totalPrice += subTotal;

    await nft.update({ quantity: newQuantity });

    await nftInCart.update({ status: "purchased" });
  });

  await cart.update({
    status: "purchased",
  });

  await Promise.all(nftsInCartPromises);

  const order = await Order.create({
    userId: sessionUser.id,
    cartId: cart.id,
    totalPrice,
  });

  res.status(201).json({
    status: "success",
    data: { order },
  });
});

const deleteNftFromCart = catchAsync(async (req, res, next) => {
  const { sessionUser } = req;
  const { nftId } = req.params;

  const cart = await Cart.findOne({
    where: { userId: sessionUser.id, status: "active" },
  });

  if (!cart) {
    return next(new AppError("you havo no active cart", 400));
  }

  const nft = await Nft.findOne({
    where: { id: nftId, status: "active" },
  });

  if (!nft) {
    return next(new AppError("Nft not found", 404));
  }

  const nftInCart = await NftInCart.findOne({
    where: { cartId: cart.id, nftId, status: "active" },
  });

  if (!nftInCart) {
    return next(new AppError("Nft not on cart", 404));
  }

  await nftInCart.update({ quantity: 0, status: "removed" });

  res.status(204).json({
    status: "success",
    data: { nftInCart },
  });
});

module.exports = {
  addNftToCart,
  updateNftOnCart,
  purchaseTheCart,
  deleteNftFromCart,
};
