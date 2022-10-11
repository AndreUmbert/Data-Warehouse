const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Country = sequelize.define(
  "country",
  {
    countryName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "country",
    timestamps: false,
  }
);

module.exports = Country;
