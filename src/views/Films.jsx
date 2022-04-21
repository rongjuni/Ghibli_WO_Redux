/*eslint-disable*/

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Films.css";

const Films = (props) => {
  let [filmsList, setFilmsList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (filmsList.length === 0) {
      fetchFilms();
    }
  }, []);

  const fetchFilms = () => {
    console.log("fetching films");
    fetch("https://ghibliapi.herokuapp.com/films", { mode: "cors" })
      .then((response) => response.json())
      .then((result) => {
        console.log("films fetched", result);
        setFilmsList(result);
      });
  };

  props.setFilmsApi(filmsList);

  return (
    <div className="container">
      <h1>FILMS</h1>

      <button
        onClick={() => {
          navigate("/");
        }}
      >
        ◀️
      </button>
      <button
        onClick={() => {
          navigate("/people");
        }}
      >
        ▶️
      </button>
      <hr />
      <div className="row">
        {filmsList.map(function (val, ind) {
          return (
            <FilmCard
              idNum={props.idNum}
              setIdNum={props.setIdNum}
              filmsList={filmsList}
              val={val}
              ind={ind}
            ></FilmCard>
          );
        })}
      </div>
    </div>
  );
}; //function film last line//

function FilmCard(props) {
  const navigate = useNavigate();

  return (
    <div
      className="card col-md-4"
      onClick={() => {
        {
          props.setIdNum(props.filmsList[props.ind].id);
        }
      }}
    >
      <div className="card-body">
        <h3>{props.val.title} </h3>
        <p>Released: {props.val.release_date}</p>
        <p>Rotten Tomatoes Score: {props.val.rt_score}</p>
        <hr />
        <p> {props.idNum}</p>

        <h6>Description</h6>
        <p> {props.val.description} </p>
      </div>
    </div>
  );
}

export default Films;
