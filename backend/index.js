import express from "express";
import pkg from "body-parser";
import cors from "cors";
import {
  getCarById,
  getCars,
  createCar,
  deleteCar,
  updateCar,
} from "./database.js";
import { createUser, getUsers, loginUser } from "./users.js";
const { json, urlencoded } = pkg;
const app = express();
const port = 4000;

app.use(pkg.json());
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: false,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(
  urlencoded({
    extended: true,
  })
);
app.get("/cars", getCars)
app.get("/cars/:id", getCarById);
app.post("/cars", createCar);
app.put("/cars/:id", updateCar);
app.delete("/cars/:id", deleteCar);
app.get("/users", getUsers)
app.post("/register", createUser)
app.post("/login", loginUser)

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
