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
  const { user_name, user_email, user_password } = request.body;

  pool.query(
    "INSERT INTO users (user_name, user_email, user_password) VALUES($1, $2, $3) RETURNING *",
    [user_name, user_email, user_password],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${results.rows[0].user_name}`);
    }
  );
};

const loginUser = (request, response) => {
  const { user_name, user_password } = request.body;
  pool.query(
    "SELECT * FROM users WHERE user_name=$1 AND user_password=$2",
    [user_name, user_password],
    (error, result) => {
      if (error) {
        throw error;
      } else {
              if (result.length>0) {
      response.send(result)
      } else response.send({message: "wrong username or password"})
      }
    }
  );
};

export { getUsers, createUser, loginUser };
