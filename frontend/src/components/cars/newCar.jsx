import React, { useState } from "react";
import { addName } from "./utils.jsx";

function NewCar() {
  const [name, setName] = useState("");

  const handleUpdate = (evt) => {
    setName(evt.target.value);
  }

  async function handleAddName(evt) {
    await addName(name);
  }


  return (
    <div className="newcar">
      <h1 className="newcar__title">Wyszukaj Twój camper</h1>
      <p>
        <label htmlFor="search">Wyszukaj wymarzony camper</label>
        <input
          className="newcar__input"
          type="text"
          name="search"
          placeholder = "search"
          value={name}
          onChange={handleUpdate}
        />
      </p>
      <p>
        <label htmlFor="date1">Sprawdź dostępność campera</label>
        <input
          className="newcar__input"
          type="date"
          name="dates"
          placeholder="date1"
          value={name}
          onChange={handleUpdate}
        />
      </p>
      <label htmlFor="typedate2"></label>
      <input
        className="newcar__input"
        type="date"
        name="date2"
        placeholder="date2"
        value={name}
        onChange={handleUpdate}
      />
      <p>
        <label htmlFor="type"> Znajdź odpowiednią markę</label>
        <input
          className="newcar__input"
          type="text"
          name="type"
          placeholder="type"
          value={name}
          onChange={handleUpdate}
        />
      </p>
      <button className="newcar__button" onClick={handleAddName}>
        Szukaj
      </button>
    </div>
  );
}

export default NewCar;
