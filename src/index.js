import 'dotenv/config';

import app from './app.js';
import { sequelize } from './database/database.js';
import { Genero } from './models/genero.js';

// import './models/genero.js';
// import './models/grupo.js';
// import './models/municipio.js';
// import './models/pais.js';
// import './models/tipo_acceso.js';
// import './models/tipo_documento.js';
// import './models/usuario_sis_acceso_pin.js';
// import './models/usuario_sis_acceso.js';
// import './models/usuario_sis_documento.js';
// import './models/usuario_sis_grupo.js';
// import './models/usuario_sis_recuperar.js';
// import './models/usuario_sis.js';
// Settings
const PORT = process.env.PORT || 5001;

async function main() {
    try {
        // await sequelize.sync();
        // await sequelize.sync();
        //await sequelize.sync({ alter: true });
        //await sequelize.authenticate().then(() => {
        //    console.log("Enlace establecido con la base de datos");
        //});
        await sequelize.sync({ force: true }).then(() => {
            console.log(`Base de datos & tablas creadas!`);

            Genero.bulkCreate([
                { id_genero: 1, descripcion: "hombre", estado: 1 },
                { id_genero: 2, descripcion: "mujer", estado: 1 },
            ])
                .then(function () {
                    return Genero.findAll();
                })
                .then(function (rta) {
                    console.log(rta);
                });
        });

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
