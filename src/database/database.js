import Sequelize from 'sequelize';

export const sequelize = new Sequelize("sis_analytics", "postgres", "Qazwsxx2", {
    host: "localhost",
    dialect: "postgres",
    // port: 5005,
});
