import { DataTypes } from 'sequelize';

import { sequelize } from '../database/database.js';

export const TipoAcceso = sequelize.define(
    "tipo_acceso",
    {
        id_tipo_acceso: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            comment: "Codigo del tipo de acceso",
        },
        descripcion: {
            type: DataTypes.STRING(100),
            comment: "Descripcion del tipo de acceso",
        },
        nivel: {
            type: DataTypes.STRING(100),
            comment: "Nivel del tipo de acceso",
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
        id_usuario_sis: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: "Codigo del usuario que realiza el registro. UsuarioSis",
        },
    },
    {
        timestamps: false,
        freezeTableName: true,
    }
);
