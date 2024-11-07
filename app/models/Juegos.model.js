module.exports = (sequelize, Sequelize) => {
    const Juego = sequelize.define('juego', {
        ID_Juego: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Nombre_Juego: {
            type: Sequelize.STRING
        },
        Genero: {
            type: Sequelize.STRING
        },
        Plataforma: {
            type: Sequelize.STRING
        },
        Fecha_Lanzamiento: {
            type: Sequelize.DATE
        },
        Precio_Alquiler: {
            type: Sequelize.DECIMAL(10, 2)
        },
        Disponibilidad: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        },
        Fecha_Alquiler: {
            type: Sequelize.DATE
        },
        Fecha_Devolucion: {
            type: Sequelize.DATE
        },
        Nombre_Cliente: {
            type: Sequelize.STRING
        },
        Comentarios: {
            type: Sequelize.TEXT
        }
    });

    return Juego;
};