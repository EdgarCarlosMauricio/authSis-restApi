import { DataTypes } from 'sequelize';

import { sequelize } from '../database/database.js';
import { Grupo } from './grupo.js';
import { UsuarioSis } from './usuario_sis.js';

export const UsuarioSisGrupo = sequelize.define(
    "usuario_sis_grupo",
    {
        id_usuario: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: "Codigo del usuario SIS. UsuarioSISAcceso",
            references: {
                model: UsuarioSis,
                key: "id_usuario",
            },
        },
        id_grupo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: "Codigo del grupo. Grupo",
            references: {
                model: Grupo,
                key: "id_grupo",
            },
        },
        vigencia_ini: {
            type: DataTypes.DATE,
            allowNull: false,
            comment: "Vigencia inicial de actividad el usuario en el grupo",
        },
        vigencia_fin: {
            type: DataTypes.DATE,
            allowNull: false,
            comment: "Vigencia final de actividad el usuario en el grupo",
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
