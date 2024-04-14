const { DataTypes, Model } = require('sequelize');
const sequelize = require('../utils/sequelize');

class User extends Model {};

User.init(
    {
      // Model attributes are defined here
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      // Other model options go here
      sequelize, // We need to pass the connection instance
      modelName: 'user', // We need to choose the model name
    },
  );

  module.exports = User;