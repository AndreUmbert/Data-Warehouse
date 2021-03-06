const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Contact = sequelize.define("contact", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    position: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    regionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    countryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    cityId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    interest: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'contact',
    timestamps: false
});

module.exports = Contact;