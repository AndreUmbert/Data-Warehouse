const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Rol = sequelize.define("rol", {
    rol: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'rol',
    timestamps: false
});

module.exports = Rol;