const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Region = sequelize.define("region", {
    regionName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'region',
    timestamps: false
});

module.exports = Region;