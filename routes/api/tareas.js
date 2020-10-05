const { Router } = require('express');
const express = require('express');
const tarea = require('../../models/tarea');
const router = express.Router();

const { nuevaTarea, getTareasById, borrarTarea } = require('../../models/tarea');

// PETICION PARA REGISTRAR NUEVA TAREA
router.post('/', async (req, res) => {
    try {
        tarea.fk_usuario = req.body['pUsuario'];
        tarea.titulo = req.body['formvalues'].titulo;
        tarea.prioridad = req.body['formvalues'].prioridad;
        tarea.descripcion = req.body['formvalues'].descripcion;

        const resultado = await nuevaTarea(tarea);

        res.json(resultado)

    } catch (error) {
        res.json({ error: error.message })
    }
});

// PETICION PARA OBTENER TODAS LAS TAREAS DE UN USUARIO
router.post('/id', async (req, res) => {
    try {
        console.log(req.body['fk_usuario']);
        const listaTareas = await getTareasById(req.body['fk_usuario']);
        res.json(listaTareas);
        console.log(listaTareas);
    } catch (error) {
        res.json({ error: error.message })
    }
});

// PETICION PARA ELIMINAR UNA TAREA
router.delete('/id/:id', async (req, res) => {

    try {
        console.log(req.params.id);
        const respuesta = await borrarTarea(req.params.id);
        res.json({ success: 'Borrado' })
    } catch (error) {
        res.json({ error: error.message })
    }

})


module.exports = router;



