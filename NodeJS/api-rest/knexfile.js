module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: 'dev.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: __dirname + '/src/databases/migrations'
    },
    seeds: {
      directory: __dirname + '/src/databases/seeds'
    }
  },
  production: {
    
  }
}