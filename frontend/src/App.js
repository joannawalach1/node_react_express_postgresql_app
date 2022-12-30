import React from "react";
import Home from './pages/Home.jsx';
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import NotFound from "./pages/NotFound.jsx";
import {
    Route,
    Routes
} from "react-router-dom";
import "./App.css";
import AllCars from "./components/cars/allCars.jsx";


const App = () => {
  return (
   <div className="app">
<Routes>
<Route path="/" element={<Home />}/>
<Route path="/login" element={<Login/>}/>
<Route path="/register" element={<Register />}/>
<Route path="/dashboard" element={<Dashboard />}/>
<Route path="/cars/:id" element={<AllCars />}/>
<Route path="/notfound" element={<NotFound />}/>
</Routes>
 </div>
   
  );
}

export default App;
