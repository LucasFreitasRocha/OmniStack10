// Update with your config settings.

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'lucas',
      password : '123.senha',
      database : 'be_the_hero'
    },
    insecureAuth : true,
    migrations: {
      directory: './src/db/migrations'
    }
  },
  test: {
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'lucas',
      password : '123.senha',
      database : 'be_the_hero_test'
    },
    insecureAuth : true,
    migrations: {
      directory: './src/db/migrations'
    }
  },

};
