module.exports = (sequelize, Sequelize) => {
  const Autor = sequelize.define('Autor', {
    id_autor: {
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
    nacionalidad: {
      type: Sequelize.STRING
    },
    fecha_nacimiento: {
      type: Sequelize.DATEONLY
    }
  }, {
    timestamps: false
  });

  return Autor;
};