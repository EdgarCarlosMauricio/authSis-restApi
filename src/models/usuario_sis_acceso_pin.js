import { DataTypes } from 'sequelize';

import { sequelize } from '../database/database.js';
import { UsuarioSis } from './usuario_sis.js';
import { UsuarioSisAcceso } from './usuario_sis_acceso.js';

export const UsuarioSisAccesoPin = sequelize.define(
    "usuario_sis_acceso_pin",
    {
        id_pin: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            comment: "Id",
        },
        id_usuario_acceso: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: "Codigo del acceso por usuario SIS. UsuarioSISAcceso",
            references: {
                model: UsuarioSisAcceso,
                key: "id_usuario_acceso",
            },
        },
        id_usuario: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: "Codigo del usuario SIS. UsuarioSISAcceso",
            references: {
                model: UsuarioSis,
                key: "id_usuario",
            },
        },
        fecha_ingreso: {
            type: DataTypes.DATE,
            allowNull: false,
            comment: "Fecha de ingreso",
        },
        fecha_egreso: {
            type: DataTypes.DATE,
            allowNull: false,
            comment: "Fecha de egreso",
        },
        salida: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: "0-No ha cerrado cesion, 1-Cerro cesion",
        },
        p1n: {
            type: DataTypes.BLOB,
            allowNull: false,
            comment: "Pin",
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
