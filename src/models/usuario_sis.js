import { DataTypes } from 'sequelize';

import { sequelize } from '../database/database.js';

export const UsuarioSis = sequelize.define(
    "usuario_sis",
    {
        id_usuario: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            comment: "Codigo del usuario",
        },
        nombres: {
            type: DataTypes.STRING(200),
            allowNull: false,
            comment: "Nombres del usuario",
        },
        apellidos: {
            type: DataTypes.STRING(200),
            allowNull: false,
            comment: "Apellido del usuario",
        },
        fecha_nacimiento: {
            type: DataTypes.DATE,
            comment: "Fecha de nacimiento del usuario",
        },
        id_genero: {
            type: DataTypes.INTEGER,
            comment: "Genero del usuario",
        },
        telefono: {
            type: DataTypes.STRING(200),
            allowNull: false,
            comment: "Telefono del usuario",
        },
        fecha_registro: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            comment: "Fecha de registro",
        },
        estado: {
            type: DataTypes.INTEGER,
            comment: "Estado del registro",
        },
        correo: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: "Correo electronico del usuario",
        },
    },
    {
        timestamps: false,
        freezeTableName: true,
    }
);
