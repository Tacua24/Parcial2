const db = require('../config/db.config.js');
const Autor = db.Autor;

// Crear y guardar un nuevo Autor
exports.create = (req, res) => {
  if (!req.body.nombre || !req.body.apellido || !req.body.nacionalidad || !req.body.fecha_nacimiento) {
    return res.status(400).send({
      message: "Los campos obligatorios no pueden estar vacíos"
    });
  }

  const autor = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    nacionalidad: req.body.nacionalidad,
    fecha_nacimiento: req.body.fecha_nacimiento
  };

  Autor.create(autor)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Ocurrió un error al crear el Autor."
      });
    });
};

// Recuperar todos los Autores
exports.findAll = (req, res) => {
  Autor.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Ocurrió un error al recuperar los Autores."
      });
    });
};

// Encontrar un Autor por id
exports.findOne = (req, res) => {
  const id = req.params.id_autor;

  Autor.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `No se encontró el Autor con id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || `Error al recuperar el Autor con id=${id}.`
      });
    });
};

// Actualizar un Autor por id
exports.update = (req, res) => {
  const id = req.params.id_autor;

  Autor.update(req.body, {
    where: { id_autor: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Autor actualizado con éxito."
        });
      } else {
        res.send({
          message: `No se pudo actualizar el Autor con id=${id}. Tal vez el Autor no fue encontrado o el req.body está vacío.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || `Error al actualizar el Autor con id=${id}.`
      });
    });
};

// Eliminar un Autor por id
exports.delete = (req, res) => {
  const id = req.params.id_autor;

  Autor.destroy({
    where: { id_autor: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Autor eliminado con éxito."
        });
      } else {
        res.send({
          message: `No se pudo eliminar el Autor con id=${id}. Tal vez el Autor no fue encontrado.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || `No se pudo eliminar el Autor con id=${id}.`
      });
    });
};