const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
const dayjs = require('dayjs');

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    hobby: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    favorite_food: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    favorite_sport: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    favorite_animal: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    favorite_subject: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    hidden_talent: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
    registration_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    hooks: {
      beforeBulkCreate: async (newUsers) => {
        for (let newUser of newUsers) {
          newUser.password = await bcrypt.hash(newUser.password, 10);
        }
      },
      beforeValidate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        newUserData.registration_date = dayjs();
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'users',
  }
);

module.exports = User;

