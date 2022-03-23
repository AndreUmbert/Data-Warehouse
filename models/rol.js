const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Rol = sequelize.define("rol", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'rol',
    timestamps: false
});

module.exports = Rol;