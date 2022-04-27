import { DataTypes } from 'sequelize';

import { sequelize } from '../database/database.js';
import { Pais } from './pais.js';

export const Municipio = sequelize.define(
    "municipio",
    {
        id_municipio: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            comment: "Id del municipio",
        },
        id_pais: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: "Id del pais",
            references: {
                model: Pais,
                key: "id_pais",
            },
        },
        descripcion: {
            type: DataTypes.STRING(200),
            comment: "Descripcion del municipio",
        },
        geocode: {
            type: DataTypes.STRING,
            comment: "coordenadas del municipio",
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
