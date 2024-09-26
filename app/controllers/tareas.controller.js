const db = require('../config/db.config.js');
const Tarea = db.Tarea;

// Crear y guardar una nueva Tarea
exports.create = (req, res) => {
  if (!req.body.id_proyecto || !req.body.nombre || !req.body.estado) {
    return res.status(400).send({
      message: "Los campos obligatorios no pueden estar vacíos"
    });
  }

  const tarea = {
    id_proyecto: req.body.id_proyecto,
    nombre: req.body.nombre,
    estado: req.body.estado,
    fecha_creacion: req.body.fecha_creacion || new Date(),
    fecha_vencimiento: req.body.fecha_vencimiento || null,
  };

  Tarea.create(tarea)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Ocurrió un error al crear la Tarea."
      });
    });
};

// Recuperar todas las Tareas
exports.findAll = (req, res) => {
  Tarea.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Ocurrió un error al recuperar las Tareas."
      });
    });
};

// Encontrar una Tarea por id
exports.findOne = (req, res) => {
  const id = req.params.id_tarea;

  Tarea.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `No se encontró la Tarea con id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || `Error al recuperar la Tarea con id=${id}.`
      });
    });
};

// Actualizar una Tarea por id
exports.update = (req, res) => {
  const id = req.params.id_tarea;

  Tarea.update(req.body, {
    where: { id_tarea: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tarea actualizada con éxito."
        });
      } else {
        res.send({
          message: `No se pudo actualizar la Tarea con id=${id}. Tal vez la Tarea no fue encontrada o el req.body está vacío.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || `Error al actualizar la Tarea con id=${id}.`
      });
    });
};

// Eliminar una Tarea por id
exports.delete = (req, res) => {
  const id = req.params.id_tarea;

  Tarea.destroy({
    where: { id_tarea: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tarea eliminada con éxito."
        });
      } else {
        res.send({
          message: `No se pudo eliminar la Tarea con id=${id}. Tal vez la Tarea no fue encontrada.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || `No se pudo eliminar la Tarea con id=${id}.`
      });
    });
};