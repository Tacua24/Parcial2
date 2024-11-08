const env = require('./env.js');
 
const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.user, env.password, {
  host: env.host,
  dialect: env.dialect,
  dialectOptions:{
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
 
  pool: {
    max: env.pool.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle,
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Usuario = require('../models/usuario.model.js')(sequelize, Sequelize);
db.Proyecto = require('../models/proyectos.model.js')(sequelize, Sequelize);
db.Tarea = require('../models/tareas.model.js')(sequelize, Sequelize);
db.Juego = require('../models/juegos.model.js')(sequelize, Sequelize);

module.exports = db;