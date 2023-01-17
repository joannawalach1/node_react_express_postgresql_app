import React from "react";
import Layouts from "../components/Layouts.jsx";
import AllCars from "../components/cars/allCars.jsx";
import NewCar from "../components/cars/newCar";

const Dashboard = (props) => {
  const handleLogout = () => {
    props.history.push("/login");
  };
  return (
    <div>
      Welcome User!
      <Layouts>
        <NewCar />
        <AllCars />
      </Layouts>
      <input type="button" onClick={handleLogout} value="Logout" />
    </div>
  );
};

export default Dashboard;
