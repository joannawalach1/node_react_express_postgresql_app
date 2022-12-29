import axios from "axios";
import React, { useState, useEffect } from "react";

const AllCars = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/cars")
    .then(res => {
      console.log("Getting from", res.data);
      setCars(res.data); 
    })
    .catch(error => console.error(error))
  }, []);

  const deleteCar = async (id,e) => {
    await axios.delete(`http://localhost:4000/cars/${id}`)
    .then(res => console.log("Deleted", res))
    .catch(error => console.error(error))
    };

  const postCar = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4000/cars/", {
      "car_price":price,
      "car_name":name
    }) 
    .then (res => 
      console.log('Posting data', res))
    .catch(error => console.error(error))
  };

  return (
    <div className="cars">
      <div className="cars__addcar--input">
        <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <label htmlFor="price">Price</label>
        <input
          type="text"
          name="price"
          placeholder="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        ></input>
        <button onClick={postCar}>dodaj Camper</button>
        </form>
      </div>
      <div>
        {cars.map((car,e) => {
          return (
            <div className="cars__card" key={car.car_id}>
              <h2 className="cars__card--title">{car.car_id}</h2>
              <p className="cars__card--name">{car.car_name}</p>
              <p className="cars__card--price">{car.car_price}</p>
              <button className="cars__button" onClick={() => deleteCar(car.car_id,e)}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllCars;
