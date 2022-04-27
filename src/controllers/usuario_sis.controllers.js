import { UsuarioSis } from '../models/usuario_sis.js';

export const getUsuarios = async (req, res) => {
    try {
        const usuarios = await UsuarioSis.findAll({
            // attributes: ['nombres', 'apellidos']
        });
        res.json(usuarios);
    } catch (error) {
        return res.status(500).json({ mensaje: error.message });
    }
};

export const getUsuario = async (req, res) => {
    const { id_usuario } = req.params;
    
    try {
        const usuario = await UsuarioSis.findOne({
            where: {
                id_usuario,
            },
            // attributes: ['nombres', 'apellidos']
        });

        if (!usuario) return res.status(404).json({mensaje: "Usuario no existe"})

        res.json(usuario);
    } catch (error) {
        return res.status(500).json({ mensaje: error.message });
    }
};

export const createUsuario = async (req, res) => {
    const {
        nombres,
        apellidos,
        fecha_nacimiento,
        id_genero,
        telefono,
        correo,
        estado,
    } = req.body;

    try {
        const newUsuario = await UsuarioSis.create({
            nombres,
            apellidos,
            fecha_nacimiento,
            id_genero,
            telefono,
            correo,
            estado,
        });
        res.json(newUsuario);
    } catch (error) {
        return res.status(500).json({ mensaje: error.message });
    }
};

export const updateUsuario = async (req, res) => {
    const { id_usuario } = req.params;
    // Metodo 1 Destructurando
    // const {
    //     nombres,
    //     apellidos,
    //     fecha_nacimiento,
    //     id_genero,
    //     telefono,
    //     correo,
    //     estado,
    // } = req.body;

    try {
        const usuario = await UsuarioSis.findByPk(id_usuario);
        // Metodo 1
        // usuario.nombres = nombres
        // usuario.apellidos = apellidos
        // usuario.fecha_nacimiento = fecha_nacimiento
        // usuario.id_genero = id_genero
        // usuario.telefono = telefono
        // usuario.correo = correo
        // usuario.estado = estado
        
        // Metodo 2 - Nos ahorramos destructurar
        // Con esta forma mas corta, puedes enviar solo el campo a actualizar
        usuario.set(req.body)
        await usuario.save();
        res.json(usuario);
    } catch (error) {
        return res.status(500).json({ mensaje: error.message });
    }
};

export const deleteUsuario = async (req, res) => {
    const { id_usuario } = req.params;
    
    try {
        await UsuarioSis.destroy({
            where: {
                id_usuario,
            }
        })
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({ mensaje: error.message });
    }
};