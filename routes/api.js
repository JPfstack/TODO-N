const express = require('express');
const router = express.Router();

const apiUsuariosRouter = require('./api/usuarios');
const apiTareasRouter = require('./api/tareas');


router.use('/usuarios', apiUsuariosRouter);
router.use('/tareas', apiTareasRouter);






module.exports = router;