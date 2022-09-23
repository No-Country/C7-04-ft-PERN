const { BOOLEAN } = require('sequelize');
const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
		'products',
		{
			ID: {
				type: DataTypes.UUID,
				primaryKey: true,
				defaultValue: DataTypes.UUIDV4,
			},
			Name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			Image: {
				type: DataTypes.ARRAY(DataTypes.TEXT),
				allowNull: false,
			},
			
			Price: {
				type: DataTypes.INTEGER,
				defaultValue: 0,
			},
			Quantity: {
				type: DataTypes.INTEGER,
				defaultValue: 0,
			},
			
			Category: {
				type: DataTypes.STRING,
			},
			City: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			
			Date: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			Detail: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
			
			isErased: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
			},
			isLive:  {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
			},
			
		},
		{ timestamps: false }
	);
};
