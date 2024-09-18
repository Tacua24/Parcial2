module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define('usuario', {
        id_usuario: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: Sequelize.STRING
        },
        apellido: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING,
        },
        telefono: {
            type: Sequelize.STRING
        },
        direccion: {
            type: Sequelize.STRING
        },
        fecha_registro: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        estado: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }
    });

    return Usuario;
};