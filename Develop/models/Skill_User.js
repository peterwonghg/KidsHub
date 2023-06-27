const { Model, DataTypes, DATE } = require('sequelize');

const sequelize = require('../config/connection');

class Skill_User extends Model {}

Skill_User.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    skill_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'skills',
        key: 'id',
      },
    },
    enrolment_date: {
      type: DataTypes.DATE, 
      allowNull: false,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_date: {
        type: DataTypes.DATE,
        allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'skill_user',
  }
);

module.exports = Skill_User;
