import { Router } from 'express';

import {
    createUsuario,
    deleteUsuario,
    getUsuario,
    getUsuarios,
    updateUsuario,
} from '../controllers/usuario_sis.controllers.js';

const router = Router();

router.get("/usuarios", getUsuarios);
router.post("/usuarios", createUsuario);
router.put("/usuarios/:id_usuario", updateUsuario);
router.delete("/usuarios/:id_usuario", deleteUsuario);
router.get("/usuarios/:id_usuario", getUsuario);

export default router;