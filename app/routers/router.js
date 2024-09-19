const express = require('express');
const router = express.Router();
const usuario = require('../controllers/usuario.controller.js');
const libro = require('../controllers/libro.controller.js');
const autor = require('../controllers/autor.controller.js');

//usuario
router.post('/usuarios', usuario.create);
router.get('/usuarios', usuario.findAll);
router.get('/usuarios/:id_usuario', usuario.findOne);
router.put('/usuarios/:id_usuario', usuario.update);
router.delete('/usuarios/:id_usuario', usuario.delete);

//libro
router.post('/libros', libro.create);
router.get('/libros', libro.findAll);
router.get('/libros/:id_libro', libro.findOne);
router.put('/libros/:id_libro', libro.update);
router.delete('/libros/:id_libro', libro.delete);

// Autor routes
router.post('/autores', autor.create);
router.get('/autores', autor.findAll);
router.get('/autores/:id_autor', autor.findOne);
router.put('/autores/:id_autor', autor.update);
router.delete('/autores/:id_autor', autor.delete);

module.exports = router;

//hola