const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Channel = sequelize.define("channel", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    channelUser: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userAccount: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    preferences: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'channel',
    timestamps: false
});

module.exports = Channel;