import "./App.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Ansiedade from "./Pages/Ansiedade";
import Panico from "./Pages/Panico";

const App = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/ansiedade">Ansiedade</Link>
          </li>
          <li>
            <Link to="/panico">Panico</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/ansiedade" element={<Ansiedade />}></Route>
        <Route path="/panico" element={<Panico />}></Route>
      </Routes>
    </>
  );
};

export default App;
