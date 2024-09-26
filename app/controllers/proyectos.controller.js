const db = require('../config/db.config.js');
const Proyecto = db.Proyecto;

// Crear y guardar un nuevo Proyecto
exports.create = (req, res) => {
  if (!req.body.id_usuario || !req.body.nombre || !req.body.descripcion) {
    return res.status(400).send({
      message: "Los campos obligatorios no pueden estar vacíos"
    });
  }

  const proyecto = {
    id_usuario: req.body.id_usuario,
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    fecha_creacion: req.body.fecha_creacion || new Date(),
  };

  Proyecto.create(proyecto)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Ocurrió un error al crear el Proyecto."
      });
    });
};

// Recuperar todos los Proyectos
exports.findAll = (req, res) => {
  Proyecto.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Ocurrió un error al recuperar los Proyectos."
      });
    });
};

// Encontrar un Proyecto por id
exports.findOne = (req, res) => {
  const id = req.params.id_proyecto;

  Proyecto.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `No se encontró el Proyecto con id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || `Error al recuperar el Proyecto con id=${id}.`
      });
    });
};

// Actualizar un Proyecto por id
exports.update = (req, res) => {
  const id = req.params.id_proyecto;

  Proyecto.update(req.body, {
    where: { id_proyecto: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Proyecto actualizado con éxito."
        });
      } else {
        res.send({
          message: `No se pudo actualizar el Proyecto con id=${id}. Tal vez el Proyecto no fue encontrado o el req.body está vacío.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || `Error al actualizar el Proyecto con id=${id}.`
      });
    });
};

// Eliminar un Proyecto por id
exports.delete = (req, res) => {
  const id = req.params.id_proyecto;

  Proyecto.destroy({
    where: { id_proyecto: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Proyecto eliminado con éxito."
        });
      } else {
        res.send({
          message: `No se pudo eliminar el Proyecto con id=${id}. Tal vez el Proyecto no fue encontrado.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || `No se pudo eliminar el Proyecto con id=${id}.`
      });
    });
};