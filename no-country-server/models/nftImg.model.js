const { db, DataTypes } = require("../utils/db.util");

const NftImg = db.define("nftImg", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  imgUrl: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  nftId: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  status: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: "active",
  },
});

module.exports = { NftImg };
