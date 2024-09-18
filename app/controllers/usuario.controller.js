const db = require('../config/db.config.js');
const Usuario = db.Usuario;

// Crear y guardar un nuevo Usuario
exports.create = (req, res) => {
  if (!req.body.nombre || !req.body.apellido || !req.body.email || !req.body.estado) {
    return res.status(400).send({
      message: "Los campos obligatorios no pueden estar vacíos"
    });
  }

  const usuario = {
    id_usuario: req.body.id_usuario,
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    email: req.body.email,
    telefono: req.body.telefono || null,
    direccion: req.body.direccion || null,
    fecha_registro: req.body.fecha_registro || new Date(),
    estado: req.body.estado
  };

  Usuario.create(usuario)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Ocurrió un error al crear el Usuario."
      });
    });
};

// Recuperar todos los Usuarios
exports.findAll = (req, res) => {
  Usuario.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Ocurrió un error al recuperar los Usuarios."
      });
    });
};

// Encontrar un Usuario por id
exports.findOne = (req, res) => {
  const id = req.params.id_usuario;

  Usuario.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `No se encontró el Usuario con id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || `Error al recuperar el Usuario con id=${id}.`
      });
    });
};

// Actualizar un Usuario por id
exports.update = (req, res) => {
  const id = req.params.id_usuario;

  Usuario.update(req.body, {
    where: { id_usuario: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Usuario actualizado con éxito."
        });
      } else {
        res.send({
          message: `No se pudo actualizar el Usuario con id=${id}. Tal vez el Usuario no fue encontrado o el req.body está vacío.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || `Error al actualizar el Usuario con id=${id}.`
      });
    });
};

// Eliminar un Usuario por id
exports.delete = (req, res) => {
  const id = req.params.id_usuario;

  Usuario.destroy({
    where: { id_usuario: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Usuario eliminado con éxito."
        });
      } else {
        res.send({
          message: `No se pudo eliminar el Usuario con id=${id}. Tal vez el Usuario no fue encontrado.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || `No se pudo eliminar el Usuario con id=${id}.`
      });
    });
};
