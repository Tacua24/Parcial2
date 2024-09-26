module.exports = (sequelize, Sequelize) => {
  const Proyecto = sequelize.define('proyecto', {
    id_proyecto: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_usuario: {
      type: Sequelize.INTEGER,
    },
    nombre: {
      type: Sequelize.STRING
    },
    descripcion: {
      type: Sequelize.TEXT
    },
    fecha_creacion: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
  });

  return Proyecto;
};