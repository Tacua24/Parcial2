const db = require('../config/db.config.js');
const Libro = db.Libro;

// Crear y guardar un nuevo Libro
exports.create = (req, res) => {
  if (!req.body.titulo || !req.body.autor || !req.body.isbn || !req.body.editorial || !req.body.anio_publicacion || !req.body.categoria || !req.body.cantidad_disponible || !req.body.ubicacion) {
    return res.status(400).send({
      message: "Los campos obligatorios no pueden estar vacíos"
    });
  }

  const libro = {
    titulo: req.body.titulo,
    autor: req.body.autor,
    isbn: req.body.isbn,
    editorial: req.body.editorial,
    anio_publicacion: req.body.anio_publicacion,
    categoria: req.body.categoria,
    cantidad_disponible: req.body.cantidad_disponible,
    ubicacion: req.body.ubicacion
  };

  Libro.create(libro)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Ocurrió un error al crear el Libro."
      });
    });
};

// Recuperar todos los Libros
exports.findAll = (req, res) => {
  Libro.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Ocurrió un error al recuperar los Libros."
      });
    });
};

// Encontrar un Libro por id
exports.findOne = (req, res) => {
  const id = req.params.id_libro;

  Libro.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `No se encontró el Libro con id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || `Error al recuperar el Libro con id=${id}.`
      });
    });
};

// Actualizar un Libro por id
exports.update = (req, res) => {
  const id = req.params.id_libro;

  Libro.update(req.body, {
    where: { id_libro: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Libro actualizado con éxito."
        });
      } else {
        res.send({
          message: `No se pudo actualizar el Libro con id=${id}. Tal vez el Libro no fue encontrado o el req.body está vacío.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || `Error al actualizar el Libro con id=${id}.`
      });
    });
};

// Eliminar un Libro por id
exports.delete = (req, res) => {
  const id = req.params.id_libro;

  Libro.destroy({
    where: { id_libro: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Libro eliminado con éxito."
        });
      } else {
        res.send({
          message: `No se pudo eliminar el Libro con id=${id}. Tal vez el Libro no fue encontrado.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || `No se pudo eliminar el Libro con id=${id}.`
      });
    });
};