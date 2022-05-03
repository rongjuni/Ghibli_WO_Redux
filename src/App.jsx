/*eslint-disable*/

import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Routes,
} from "react-router-dom";
import Films from "./views/Films";
import Home from "./views/Home";
import Detail from "./views/Detail";
import NavbarComponent from "./views/Navbar";
import "./App.css";

function App() {
  const [filmsList, setFilmsList] = useState([]);
  const [peopleList, setPeopleList] = useState([]);

  //Films ID passed from Films.jsx when it's clicked for future use
  const [passedId, setPassedId] = useState();
  const [selected, setSelected] = useState();

  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route
          exact
          path="/films"
          element={<Films setPassedId={setPassedId} filmsList={filmsList} />}
        />

        <Route exact path="/detail" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
