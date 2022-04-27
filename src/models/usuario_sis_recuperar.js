import { DataTypes } from 'sequelize';

import { sequelize } from '../database/database.js';
import { UsuarioSis } from './usuario_sis.js';

export const UsuarioSisRecuperar = sequelize.define(
    "usuario_sis_recuperar",
    {
        id_usuario_recuperar: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            comment: "Codigo del acceso por usuario SIS",
        },
        id_usuario: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: "Codigo del usuario SIS. UsuarioSIS",
            references: {
                model: UsuarioSis,
                key: "id_usuario",
            },
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
    },
    {
        timestamps: false,
        freezeTableName: true,
    }
);
