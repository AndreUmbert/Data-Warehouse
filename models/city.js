const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const City = sequelize.define("city", {
    cityName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'city',
    timestamps: false
});

module.exports = City;