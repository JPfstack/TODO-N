const { Router } = require('express');
const express = require('express');
const tarea = require('../../models/tarea');
const router = express.Router();

const { nuevaTarea } = require('../../models/tarea');

// PETICION PARA REGISTRAR NUEVA TAREA
router.post('/', async (req, res) => {
    try {
        console.log(req.body);
        tarea.fk_usuario = req.body['pUsuario'];
        tarea.titulo = req.body['formvalues'].titulo;
        tarea.prioridad = req.body['formvalues'].prioridad;
        tarea.descripcion = req.body['formvalues'].descripcion;

        console.log(tarea);



        const resultado = await nuevaTarea(tarea);

        res.json(resultado)

    } catch (error) {
        res.json({ error: error.message })
    }
});


module.exports = router;



