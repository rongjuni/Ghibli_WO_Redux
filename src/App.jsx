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
  const [passedId, setPassedId] = useState();

  useEffect(() => {
    if (filmsList.length === 0 || peopleList.length === 0) {
      fetchFilms();
      fetchPeople();
    }
  }, []);

  const fetchFilms = () => {
    console.log("fetching films");
    fetch("https://ghibliapi.herokuapp.com/films", { mode: "cors" })
      .then((response) => response.json())
      .then((result) => {
        // console.log("films fetched", result);
        setFilmsList(result);
      })
      .catch((error) => console.log(error));
  };

  const fetchPeople = () => {
    console.log("fetching People");
    fetch("https://ghibliapi.herokuapp.com/people", { mode: "cors" })
      .then((response) => response.json())
      .then((result) => {
        // console.log("people fetched", result);
        setPeopleList(result);
      })
      .catch((error) => console.log(error));
  };

  console.log(filmsList);
  console.log(peopleList);

  const foundFilm = filmsList.find((films) => {
    return films.id === passedId;
  });

  const foundPeople = peopleList.find((people) => {
    return people.id === passedId;
  });

  console.log("film", foundFilm);
  console.log("people", foundPeople);
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
          element={<People setPassedId={setPassedId} peopleList={peopleList} />}
        />

        <Route
          exact
          path="/detail"
          element={<Detail foundFilm={foundFilm} foundPeople={foundPeople} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
