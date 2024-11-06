const env = {
  database: 'examenfinal_f65c',
  user: 'examenfinal_f65c_user',
  password: 'CI4dNzpPE3jFzAFnv8j9HOY8hDKqqx23',
  host: 'dpg-cslqevbgbbvc73cutv30-a.oregon-postgres.render.com',
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
  