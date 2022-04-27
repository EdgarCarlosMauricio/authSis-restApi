import { DataTypes } from 'sequelize';

import { sequelize } from '../database/database.js';


export const TipoDocumento = sequelize.define(
    "tipo_documento",
    {
        id_tipo_documento: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            comment: "Id",
        },
        tipo_documento: {
            type: DataTypes.STRING(5),
            allowNull: false,
            comment: "Tipo de documento",
        },
        descripcion: {
            type: DataTypes.INTEGER(100),
            comment: "Id del municipio del documento",
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
    }
);
