import { DataTypes } from 'sequelize';

import { sequelize } from '../database/database.js';
import { Municipio } from './municipio.js';
import { Pais } from './pais.js';
import { TipoDocumento } from './tipo_documento.js';
import { UsuarioSis } from './usuario_sis.js';

export const UsuarioSisDocumento = sequelize.define(
    "usuario_sis_documento",
    {
        id_usuario: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            comment: "Id",
            references: {
                model: UsuarioSis,
                key: "id_usuario",
            },
        },
        id_tipo_documento: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            comment: "Id del tipo de documento",
            references: {
                model: TipoDocumento,
                key: "id_tipo_documento",
            },
        },
        id_municipio_documento: {
            type: DataTypes.INTEGER,
            comment: "Id del municipio del documento",
            references: {
                model: Municipio,
                key: "id_municipio",
            },
        },
        id_pais_documento: {
            type: DataTypes.INTEGER,
            comment: "Id del pais del documento",
            references: {
                model: Pais,
                key: "id_pais",
            },
        },
        documento: {
            type: DataTypes.STRING(30),
            comment: "Numero del documento del usuario",
        },
        fecha_registro: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            comment: "Fecha de creacion del registro",
        },
        estado: {
            type: DataTypes.INTEGER,
            comment: "estado del registro",
        },
    },
    {
        timestamps: false,
        freezeTableName: true,
        // tableName: "usuario_sis_documento",
    }
);