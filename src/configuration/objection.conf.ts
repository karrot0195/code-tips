import knex from "knex";
import Objection from "objection";

const useObjection = (): void => {
  const knexObject = knex({
    connection: {
      host: "localhost",
      port: 5401,
      user: "postgres",
      password: "abcd1234",
      database: "dev",
      timezone: "+00:00",
    },
    client: "pg",
  });
  Objection.Model.knex(knexObject);
};

export default useObjection;
