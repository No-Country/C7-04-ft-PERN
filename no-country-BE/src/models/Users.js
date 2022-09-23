const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el model
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	sequelize.define(
		'users',
		{
			ID: {
				type: DataTypes.UUID,
				primaryKey: true,
				defaultValue: DataTypes.UUIDV4,
			},
			Name: {
				type: DataTypes.STRING,
				defaultValue: 'Guest',
			},
			Username: {
				type: DataTypes.STRING,
				isUnique: true,
				allowNull: true,
			},
			Password: {
				type: DataTypes.STRING,
				allowNull: true,
			},

			Token: {
				type: DataTypes.STRING,
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
			City: {
				type: DataTypes.STRING,
			},
			Location: {
				type: DataTypes.STRING,
			},
			Role: {
				type: DataTypes.STRING,
				defaultValue: 'Guest',
			},
			Favourites: {
				type: DataTypes.ARRAY(DataTypes.JSONB),
				defaultValue: [],
			},
			shoppingHistory: {
				type: DataTypes.ARRAY(DataTypes.JSONB),
				defaultValue: [],
			},
			CreatedProduct: {
				type: DataTypes.ARRAY(DataTypes.JSONB),
				defaultValue: [],
			},
			
			LoggedIn: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
			},
			Cart: {
				type: DataTypes.ARRAY(DataTypes.JSON),
				defaultValue: [],
			},
			
			isBan: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
			},
				isSeller: {
					type: DataTypes.BOOLEAN,
					defaultValue: false,
	
			},

		
			Phone: {
				type: DataTypes.STRING,
				defaultValue: '',
				allowNull: true
			
			
			},

			LastName: {
				type: DataTypes.STRING,
				defaultValue: '',
				allowNull: true
			},
			
		},
		{ timestamps: false }
	);
};
