/*eslint-disable*/

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { InputGroup, FormControl } from "react-bootstrap";
import "./Films.css";

const Films = (props) => {
  const navigate = useNavigate();

  const [filmsList, setFilmsList] = useState(props.filmsList);
  const [search, setSearch] = useState(props.filmsList);

  console.log("detailpage filmslist", filmsList);

  const handleSearchInput = (e) => {
    console.log(e.target.value);
    const searchedItem = filmsList.filter((list) => {
      if (list.title.toLowerCase().includes(e.target.value.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    });
    setSearch(searchedItem);
    console.log("searchItem", searchedItem);
    console.log("filmsList", filmsList);
  };

  // const handleSearchInput = (event) => {
  //   const updatedList = filmsList.filter((list) => {
  //     list.title.includes("o");
  //   });

  //   setSearch(updatedList);
  //   console.log(updatedList);
  // };

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

      <input placeholder="Search Anime" onChange={handleSearchInput} />

      <hr />
      <div className="row">
        {search.length < 1
          ? setSearch(filmsList)
          : search.map(function (val, ind) {
              return (
                <FilmCard
                  setPassedId={props.setPassedId}
                  filmsList={filmsList}
                  search={search}
                  val={val}
                  ind={ind}
                />
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
          // props.setIdNumPassed(props.filmsList[props.ind].id);
          props.setPassedId(props.filmsList[props.ind].id);
          navigate("/detail");
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
