const db = require("../models");
const Juego = db.juegos;
const Op = db.Sequelize.Op;

// Crear y guardar un nuevo Juego
exports.create = (req, res) => {
    // Validar la solicitud
    if (!req.body.Nombre_Juego) {
        res.status(400).send({
            message: "El contenido no puede estar vacío!"
        });
        return;
    }

    // Crear un Juego
    const juego = {
        Nombre_Juego: req.body.Nombre_Juego,
        Genero: req.body.Genero,
        Plataforma: req.body.Plataforma,
        Fecha_Lanzamiento: req.body.Fecha_Lanzamiento,
        Precio_Alquiler: req.body.Precio_Alquiler,
        Disponibilidad: req.body.Disponibilidad,
        Fecha_Alquiler: req.body.Fecha_Alquiler,
        Fecha_Devolucion: req.body.Fecha_Devolucion,
        Nombre_Cliente: req.body.Nombre_Cliente,
        Comentarios: req.body.Comentarios
    };

    // Guardar Juego en la base de datos
    Juego.create(juego)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrió un error al crear el Juego."
            });
        });
};

// Recuperar todos los Juegos de la base de datos
exports.findAll = (req, res) => {
    const nombre = req.query.Nombre_Juego;
    var condition = nombre ? { Nombre_Juego: { [Op.like]: `%${nombre}%` } } : null;

    Juego.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrió un error al recuperar los juegos."
            });
        });
};

// Encontrar un solo Juego con un id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Juego.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se puede encontrar el Juego con id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al recuperar el Juego con id=" + id
            });
        });
};

// Actualizar un Juego por el id en la solicitud
exports.update = (req, res) => {
    const id = req.params.id;

    Juego.update(req.body, {
        where: { ID_Juego: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "El Juego se actualizó con éxito."
                });
            } else {
                res.send({
                    message: `No se puede actualizar el Juego con id=${id}. Tal vez el Juego no fue encontrado o req.body está vacío!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al actualizar el Juego con id=" + id
            });
        });
};

// Eliminar un Juego con el id especificado en la solicitud
exports.delete = (req, res) => {
    const id = req.params.id;

    Juego.destroy({
        where: { ID_Juego: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "El Juego fue eliminado con éxito!"
                });
            } else {
                res.send({
                    message: `No se puede eliminar el Juego con id=${id}. Tal vez el Juego no fue encontrado!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se pudo eliminar el Juego con id=" + id
            });
        });
};

// Eliminar todos los Juegos de la base de datos.
exports.deleteAll = (req, res) => {
    Juego.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Juegos fueron eliminados con éxito!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrió un error al eliminar todos los juegos."
            });
        });
};

// Encontrar todos los Juegos disponibles
exports.findAllDisponibles = (req, res) => {
    Juego.findAll({ where: { Disponibilidad: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrió un error al recuperar los juegos disponibles."
            });
        });
};