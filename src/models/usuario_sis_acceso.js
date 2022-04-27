import { DataTypes } from 'sequelize';

import { sequelize } from '../database/database.js';
import { TipoAcceso } from './tipo_acceso.js';
import { UsuarioSis } from './usuario_sis.js';

export const UsuarioSisAcceso = sequelize.define(
    "usuario_sis_acceso",
    {
        id_usuario_acceso: {
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
        id_tipo_acceso: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: "Codigo del tipo de acceso. TipoAcceso",
            references: {
                model: TipoAcceso,
                key: "id_tipo_acceso",
            },
        },
        p4wd43s: {
            type: DataTypes.BLOB,
            allowNull: false,
            comment: "Acceso",
        },
        vigencia_ini: {
            type: DataTypes.DATE,
            allowNull: false,
            comment: "Vigencia inicial del acceso",
        },
        vigencia_fin: {
            type: DataTypes.DATE,
            allowNull: false,
            comment: "Vigencia final del acceso",
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
