const env = {
    database: 'apis_l0sp',
    user: 'apis_l0sp_user',
    password: 'cHG8gkgylR3QZ9NEueq0HjDySgk6iIJY',
    host: 'dpg-cru38qggph6c73cjsru0-a.oregon-postgres.render.com',
    dialect: 'postgres',
    port: 5432,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    }
  };
  
  module.exports = env;
  