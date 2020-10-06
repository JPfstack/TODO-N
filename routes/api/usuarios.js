const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');
const moment = require('moment');
const jwt = require('jsonwebtoken');


const { registroUsuario, getIdByUser, getAllUsers } = require('../../models/usuario');

// PETICION PARA REGISTRAR NUEVO USUARIO
router.post('/', async (req, res) => {
    try {
        const listaUsuarios = await getAllUsers();
        console.log(listaUsuarios);
        const listaFiltrada = listaUsuarios.filter(user => user.usuario === req.body.usuario)
        console.log(listaFiltrada);

        if (listaFiltrada.length != 0) {
            res.json('Usuario existente')
        } else {
            req.body.password = bcrypt.hashSync(req.body.password, 10);
            const resultado = await registroUsuario(req.body);
            console.log(req.body);
            res.json(resultado)
        }

    }

    catch (error) {
        res.json({ error: error.message })

    }
});


// PETICION LOGIN MEDIANTE NOMBRE USUARIO
router.post('/login', async (req, res) => {
    try {
        const usuario = await getIdByUser(req.body.usuario);
        if (usuario) {
            console.log(req.body.password, usuario.password);
            const passOK = bcrypt.compareSync(req.body.password, usuario.password);
            console.log(passOK);
            if (passOK) {
                res.json({ success: 'Login OK', usuario, token: createToken(usuario) })
            } else {
                res.json({ error: error.message })
            }
        } else {
            res.json({ error: error.message })
        }
    } catch (error) {
        res.json({ error: error.message })
    }
});

// PETICION PARA OBTENER ID DE CLIENTE A PARTIR DEL TOKEN
router.post('/token', async (req, res) => {
    const payload = jwt.verify(req.body.token, 'En un lugar de la Mancha');
    console.log(req.body, payload);
    res.json({ userId: payload.usuarioId })

});



// TOKEN
function createToken(pUsuario) {
    const payload = {
        usuarioId: pUsuario.id,
        usuarioUser: pUsuario.usuario,
        createdAt: moment().unix(),
        expiredAt: moment().add(15, 'minutes').unix()
    }
    return jwt.sign(payload, 'En un lugar de la Mancha')
};


module.exports = router;