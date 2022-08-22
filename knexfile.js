// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    connection: {
      host: "localhost",
      port: 5401,
      user: "postgres",
      password: "abcd1234",
      database: "dev",
      timezone: "+00:00",
    },
    client: "pg",
  },
};
