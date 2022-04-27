import express from 'express';

import usuariosSisRoutes from './routes/usuario_sis.routes.js';

const app = express();
// middlewares
// Este primero habilita recibir datos en json y guarda en req.body
app.use(express.json())

app.use(usuariosSisRoutes);

export default app;
