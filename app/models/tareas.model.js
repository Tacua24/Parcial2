module.exports = (sequelize, Sequelize) => {
    const Tarea = sequelize.define('tarea', {
        id_tarea: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_proyecto: {
            type: Sequelize.INTEGER,
        },
        nombre: {
            type: Sequelize.STRING
        },
        estado: {
            type: Sequelize.STRING,
        },
        fecha_creacion: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        fecha_vencimiento: {
            type: Sequelize.DATE,
        },
    });

    return Tarea;
};