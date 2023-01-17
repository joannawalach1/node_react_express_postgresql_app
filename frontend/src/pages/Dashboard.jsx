import React from "react";
import Layouts from "../components/Layouts.jsx";
import NewCar from "../components/cars/newCar";
import FilteredCampers from "../components/cars/filteredCampers.jsx";

const Dashboard = (props) => {
  const handleLogout = () => {
    props.history.push("/login");
  };
  return (
    <div>
      Welcome User!
      <Layouts>
        <NewCar />
        <FilteredCampers />
      </Layouts>
      <input type="button" onClick={handleLogout} value="Logout" />
    </div>
  );
};

export default Dashboard;
