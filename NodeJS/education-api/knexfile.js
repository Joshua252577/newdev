module.exports = {
  devolopment: {
    client: 'squlite3',
    connection: {
        filename: 'development.squile3'
},
pool: {
  afterCreate: function(connection, cb) {
    connection.run('PRAGMA foreing_keys = ON', cb);
  }
},
migrations: {
  directory: __dirname + '/src/databases/migrations'
    }
  }
}