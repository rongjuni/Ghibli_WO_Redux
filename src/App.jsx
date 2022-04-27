/*eslint-disable*/

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Films from "./views/Films";
import People from "./views/People";
import Home from "./views/Home";
import Detail from "./views/Detail";
import NavbarComponent from "./components/Navbar";
import "./App.css";

function App() {
  const [filmsList, setFilmsList] = useState([]);
  const [peopleList, setPeopleList] = useState([]);

  //Films ID passed from Films.jsx when it's clicked
  const [passedId, setPassedId] = useState();
  const [selected, setSelected] = useState();

  // const foundFilm = filmsList.find((films) => {
  //   return films.id === passedId;
  // });

  // const foundPeople = peopleList.find((people) => {
  //   return people.id === passedId;
  // });

  // console.log("film", foundFilm);
  // console.log("people", foundPeople);
  return (
    <Router>
      <NavbarComponent></NavbarComponent>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/films"
          element={<Films setPassedId={setPassedId} filmsList={filmsList} />}
        />
        <Route
          exact
          path="/people"
          element={
            <People
              setSelected={setSelected}
              setPassedId={setPassedId}
              peopleList={peopleList}
            />
          }
        />

        <Route exact path="/detail" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
