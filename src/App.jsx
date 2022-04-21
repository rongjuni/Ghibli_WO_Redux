import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Films from "./views/Films";
import People from "./views/People";
import Home from "./views/Home";
import NavbarComponent from "./components/Navbar";
import "./App.css";

function App() {
  const [idNum, setIdNum] = useState();
  const [peopleApi, setPeopleApi] = useState([]);
  const [filmsApi, setFilmsApi] = useState([]);

  return (
    <Router>
      <NavbarComponent></NavbarComponent>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/films"
          element={
            <Films
              setFilmsApi={setFilmsApi}
              idNum={idNum}
              setIdNum={setIdNum}
            />
          }
        />
        <Route
          exact
          path="/people"
          element={
            <People
              setPeopleApi={setPeopleApi}
              idNum={idNum}
              setIdNum={setIdNum}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
