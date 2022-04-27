/*eslint-disable*/

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Films.css";

const Films = (props) => {
  //API directly comes here
  const [filmsList, setFilmsList] = useState(props.filmsList);
  // input search result comes here
  const [search, setSearch] = useState([]);

  const navigate = useNavigate();

  // as page rendered, if filmsList has not been imported, it imports
  useEffect(() => {
    if (filmsList.length === 0) {
      fetchFilms();
    }
  }, []);

  // fetching films API

  const fetchFilms = () => {
    console.log("fetching films");
    fetch("https://ghibliapi.herokuapp.com/films", { mode: "cors" })
      .then((response) => response.json())
      .then((result) => {
        setFilmsList(result);
        setSearch(result);
      })
      .catch((error) => console.log(error));
  };

  console.log("filmsList?", filmsList);

  // input box-updating variable 'search'
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
  };

  console.log("searched", search);

  return (
    <div className="container">
      <h1>FILMS</h1>

      <button
        onClick={() => {
          navigate("/");
        }}
      >
        🏚️
      </button>

      <input placeholder="Search Anime" onChange={handleSearchInput} />

      <hr />
      <div className="row">
        {search.length < 1
          ? console.log("empty")
          : // search.map(function (val, ind) {
            //     return (
            //       <FilmCard
            //         setPassedId={props.setPassedId}
            //         filmsList={filmsList}
            //         search={search}
            //         val={val}
            //         ind={ind}
            //         setSelected={props.setSelected}
            //       />
            //     );
            //   })
            search.map(function (val, ind) {
              return (
                <FilmCard
                  setPassedId={props.setPassedId}
                  filmsList={filmsList}
                  search={search}
                  val={val}
                  ind={ind}
                  setSelected={props.setSelected}
                />
              );
            })}
      </div>
    </div> // first div last line
  ); // Films return last line
}; // Films function last line//

function FilmCard(props) {
  const navigate = useNavigate();
  const clickedApi = props.val;

  return (
    <div
      className="card col-md-4"
      onClick={() => {
        {
          props.setPassedId(props.filmsList[props.ind].id);
          navigate("/detail", { state: { clickedApi: { clickedApi } } });
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
