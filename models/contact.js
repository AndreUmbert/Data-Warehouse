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
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    interest: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    preferences: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: 'contact',
    timestamps: false
});

module.exports = Contact;