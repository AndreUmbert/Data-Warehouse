const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Channel = require("./channel");
const Contact = require("./contact");

const ChannelHasContact = sequelize.define("channelHasContact", {
    channelId: {
        field: 'channelId',
        type: DataTypes.NUMBER,
        allowNull: false,
        references: {
            model: Channel,
            key: 'id',
        }
    },
    contactId: {
        field: 'contactId',
        type: DataTypes.NUMBER,
        allowNull: false,
        references: {
            model: Contact,
            key: 'id',
        }
    },

}, {

    tableName: 'channelHasContact',
    timestamps: false,
});

module.exports = ChannelHasContact;