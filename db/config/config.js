 const config = {
  "development": {
    "username": "root",
    "password": null,
    "database": "tutor_app",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    logging: false
  }
}

module.exports = config
