import express from "express";
import pkg from "body-parser";
import cors from "cors";
const { json, urlencoded } = pkg;
const app = express();
const port = 4000;
import {getCarById, getCars, createCar, deleteCar, updateCar} from "./database.js";

app.use(pkg.json());
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:false,           
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(
  urlencoded({
    extended: true,
  })
);

app.get("/", (request, response) => {
  response.json({
    "car_name": "aaaaaaaaaaa",
    "car_price": 2000,
  });
});

app.get('/cars/', getCars)
app.get('/cars/:id', getCarById)
app.post('/cars', createCar)
app.put('/cars/:id', updateCar)
app.delete('/cars/:id', deleteCar)

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
