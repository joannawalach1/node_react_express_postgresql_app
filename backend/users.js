import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "database1",
  password: "666666",
  port: 5432,
});

const getUsers = (request, response) => {
  pool.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const createUser = (request, response) => {
  const { username, email, password } = request.body;

  pool.query(
    "INSERT INTO users (username, email, password) VALUES($1, $2, $3) RETURNING *",
    [username, email, password],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`);
    }
  );
};

const loginUser = (request, response) => {
  const { username, password } = request.body;
  pool.query(
    "SELECT * FROM users WHERE username=$1 AND password=$2",
    [username, password],
    (error, result) => {
      if (error) {
        throw error;
      }

      if (result) {
        response.send(result);
      } else {
        response.send({ message: "no user found" });
      }
    }
  );
};
export { getUsers, createUser, loginUser };
