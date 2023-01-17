import axios from "axios";
import React, { useState } from "react";

const FilteredCampers = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  const fetchFilteredCampers = async () => {
    const result = await axios.get(`http://localhost:4000/cars`);
    setData(result.data);
    console.log(query);
    console.log(data.filter(car => car.car_name.includes("asssssss")));
  };

  return (
    <>
      <div className="newcar">
        <h1 className="newcar__title">Wyszukaj Twój camper</h1>
        <p>
          <label htmlFor="search">Wyszukaj wymarzony camper</label>
          <input
            className="newcar__input"
            type="text"
            name="search"
            placeholder="search"
            onChange={(e) => setQuery(e.target.value)}
          />
        </p>

        <button className="newcar__button" onClick={fetchFilteredCampers}>
          Szukaj
        </button>
      </div>
      <div>
        <ul>
          {data.map((camper, index) => (
            <li key={index}> {camper.email}</li>
          ))}{" "}
        </ul>
      </div>
    </>
  );
};

export default FilteredCampers;
