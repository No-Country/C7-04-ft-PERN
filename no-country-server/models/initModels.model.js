const { Cart } = require("./cart.model");
const { Category } = require("./category.model");
const { Order } = require("./order.model");
const { Nft } = require("./nft.model");
const { NftImg } = require("./nftImg.model");
const { NftInCart } = require("./nftInCart.model");
const { User } = require("./user.model");

const initModels = () => {
  User.hasMany(Order, { foreignKey: "userId" });
  Order.belongsTo(User);

  User.hasMany(Nft, { foreignKey: "userId" });
  Nft.belongsTo(User);

  User.hasOne(Cart, { foreignKey: "userId" });
  Cart.belongsTo(User);

  Category.hasMany(Nft, { foreignKey: "categoryId" });
  Nft.belongsTo(Category);

  Nft.hasMany(NftImg, { foreignKey: "nftId" });
  NftImg.belongsTo(Nft);

  Nft.hasOne(NftInCart, { foreignKey: "nftId" });
  NftInCart.belongsTo(Nft);

  Cart.hasOne(Order, { foreignKey: "cartId" });
  Order.belongsTo(Cart);

  Cart.hasMany(NftInCart, { foreignKey: "cartId" });
  NftInCart.belongsTo(Cart);
};

module.exports = { initModels };
