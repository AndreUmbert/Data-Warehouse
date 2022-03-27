const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const User = require("./user");
const Contact = require("./contact");

const UserTableHasContact = sequelize.define("userTableHasContact", {
    userTableId: {
        field: 'usertableId',
        type: DataTypes.NUMBER,
        allowNull: false,
        references: {
            model: User,
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

    tableName: 'userTableHasContact',
    timestamps: false,
});

module.exports = UserTableHasContact;