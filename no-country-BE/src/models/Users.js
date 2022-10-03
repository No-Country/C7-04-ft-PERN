const { DataTypes } = require("sequelize");

// Exportamos una funcion que define el model
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  sequelize.define(
    "users",
    {
      ID: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      Username: {
        type: DataTypes.STRING,
        isUnique: true,
        allowNull: true,
      },

      Email: {
        type: DataTypes.STRING,
        isUnique: true,
        validate: {
          isEmail: true,
        },
      },
      Image: {
        type: DataTypes.TEXT,
      },

      Role: {
        type: DataTypes.STRING,
        defaultValue: "Guest",
      },
      Favourites: {
        type: DataTypes.ARRAY(DataTypes.JSONB),
        defaultValue: [],
      },
      shoppingHistory: {
        type: DataTypes.ARRAY(DataTypes.JSONB),
        defaultValue: [],
      },
      CreatedNfts: {
        type: DataTypes.ARRAY(DataTypes.JSONB),
        defaultValue: [],
      },
      Cart: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        defaultValue: [],
      },

      isBan: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    { timestamps: false }
  );
};
