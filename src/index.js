import app from './app.js';
import { sequelize } from './database/database.js';

async function main() {
    try {
        await sequelize.authenticate();
        console.log('Enlace establecido con la base de datos');
        app.listen(5001);
    console.log("Server este escuchando en el puerto", 5001);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main();