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
      response.send(error)
    }
    response.status(200).json(results.rows);
  });
};

const createUser = (request, response) => {
  const {name, password, email} = request.body;


  pool.query(
    "INSERT INTO users (name, email, password) VALUES($1, $2, $3) RETURNING *",
    [name, email, password],
    (error, result) => {
     if(result) {
      response.send(result.rows[0])
     } else {
      response.send({message: "Podaj prawidłowe dane"})
     }
    }
  );
};

const loginUser = (request, response) => {
  const name = request.body.name;
  const password = request.body.password;

  pool.query(
    "SELECT * FROM users WHERE name = $1 and password = $2",
    [name, password],
    (error, result) => {
      if (error) {
        response.send(error)
      }
      response.status(200).json(result.rows[0]);
      } 
     
  )}


export { getUsers, createUser, loginUser };
