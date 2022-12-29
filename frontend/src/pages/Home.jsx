import React from "react";
import Layouts from "../components/Layouts.jsx";
import NewCar from "../components/cars/newCar.jsx";
import AllCars from "../components/cars/allCars.jsx";

const Home = () => {
  return (
    <Layouts className="layout">
      <NewCar />
      <AllCars />
    </Layouts>
  );
};

export default Home;
