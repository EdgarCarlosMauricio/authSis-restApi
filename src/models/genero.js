import { DataTypes } from 'sequelize';

import { sequelize } from '../database/database.js';

export const Genero = sequelize.define(
    "genero",
    {
        id_genero: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            comment: "Codigo del genero",
        },
        descripcion: {
            type: DataTypes.STRING(100),
            comment: "Descripcion del genero",
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
