import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "database1",
  password: "666666",
  port: 5432,
});

const getCars = (request, response) => {
  pool.query("SELECT * FROM cars ORDER BY car_id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getCarById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("SELECT * FROM cars WHERE car_id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const createCar = (request, response) => {
  const { car_name, car_price } = request.body;

  pool.query(
    "INSERT INTO cars (car_name, car_price) VALUES($1, $2) RETURNING *",
    [car_name, car_price],
    (error, results) => {
      if (error) {
        throw error;
      }
      response
        .status(201)
        .send(`Car added with ID: ${results.rows[0].car_id}`);
    }
  );
};

const updateCar = (request, response) => {
  const id = parseInt(request.params.id);
  const { car_name, car_price } = request.body;

  pool.query(
    "UPDATE cars SET car_name = $1, car_price = $2 WHERE car_id = $3",
    [car_name, car_price, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Car modified with ID: ${id}`);
    }
  );
};

const deleteCar = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("DELETE FROM cars WHERE car_id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`Car deleted with ID: ${id}`);
  });
};

export { getCars, getCarById, createCar, updateCar, deleteCar };
