const express = require('express');
const router = express.Router();
const usuario = require('../controllers/usuario.controller.js');

//usuario
router.post('/usuarios', usuario.create);
router.get('/usuarios', usuario.findAll);
router.get('/usuarios/:id_usuario', usuario.findOne);
router.put('/usuarios/:id_usuario', usuario.update);
router.delete('/usuarios/:id_usuario', usuario.delete);

const proyecto = require('../controllers/proyectos.controller.js');

//proyecto
router.post('/proyectos', proyecto.create);
router.get('/proyectos', proyecto.findAll);
router.get('/proyectos/:id_proyecto', proyecto.findOne);
router.put('/proyectos/:id_proyecto', proyecto.update);
router.delete('/proyectos/:id_proyecto', proyecto.delete);

const tarea = require('../controllers/tareas.controller.js');

// Tarea
router.post('/tareas', tarea.create);
router.get('/tareas', tarea.findAll);
router.get('/tareas/:id_tarea', tarea.findOne);
router.put('/tareas/:id_tarea', tarea.update);
router.delete('/tareas/:id_tarea', tarea.delete);

module.exports = router;