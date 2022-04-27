import { DataTypes } from 'sequelize';

import { sequelize } from '../database/database.js';

export const Pais = sequelize.define(
    "pais",
    {
        id_pais: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            comment: "Id del pais",
        },
        alpha_2: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: "Codigo de dos caracteres del pais",
        },
        alpha_3: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: "Codigo de tres caracteres del pais",
        },
        descripcion: {
            type: DataTypes.STRING(200),
            comment: "Descripcion del pais",
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
