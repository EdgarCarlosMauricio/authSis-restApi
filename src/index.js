// import './models/grupo.js';
// import './models/municipio.js';
// import './models/pais.js';
// import './models/tipo_acceso.js';
// import './models/tipo_documento.js';
// import './models/usuario_sis.js';
// import './models/usuario_sis_acceso.js';
// import './models/usuario_sis_acceso_pin.js';
// import './models/usuario_sis_documento.js';
// import './models/usuario_sis_grupo.js';
// import './models/usuario_sis_recuperar.js';
import 'dotenv/config';

import app from './app.js';
import { sequelize } from './database/database.js';


// Settings
const PORT = process.env.PORT || 5001;

async function main() {
    try {
        await sequelize.sync({ force: false });
        // await sequelize.sync();
        //await sequelize.sync({ alter: true });
        //await sequelize.authenticate().then(() => {
        //    console.log("Enlace establecido con la base de datos");
        //});

        app.get("/", function (req, res) {
            res.send("Hola");
        });
        app.listen(PORT, function () {
            console.log(`Server este escuchando en el puerto ${PORT}`);
        });
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}

main();
