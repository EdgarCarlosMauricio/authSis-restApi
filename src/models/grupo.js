import { DataTypes } from 'sequelize';

import { sequelize } from '../database/database.js';

export const Grupo = sequelize.define(
    "grupo",
    {
        id_grupo: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            comment: "Codigo del grupo",
        },
        descripcion: {
            type: DataTypes.STRING(200),
            comment: "Descripcion del grupo",
        },
        ip: {
            type: DataTypes.INET,
            allowNull: false,
            comment: "IP del funcionario",
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
