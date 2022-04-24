import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Detail = (props) => {
  const [found, setFound] = useState(props.foundFilm);
  const [char, setChar] = useState([]);

  const navigate = useNavigate();

  // console.log("found = ", found);
  // console.log("found people = ", found.people[0]);
  console.log("found people without num= ", found.people);
  console.log("found people without num length = ", found.people.length);

  //
  //
  //돌때마다 Push 해야하나 //
  found.people.map((val, idx) => {
    fetch(val, { mode: "cors" })
      .then((response) => response.json())
      .then((result) => {
        // return result;
        // let copyChar = [...char];
        // copyChar.push(result);
        // setChar(copyChar);
        console.log("fetch again", result);
      })
      .catch((error) => console.log(error));
  }); //map ending line
  //돌때마다 Push 해야하나 //
  //
  //

  return (
    <div className="container">
      <h1>Detail</h1>

      <button
        onClick={() => {
          navigate("/Films");
        }}
      >
        🏚️
      </button>
      <hr />

      <div className>
        <h2>Title: {props.foundFilm.title}</h2>
        <p>Original Title: {props.foundFilm.original_title}</p>
        <p>Producer: {props.foundFilm.producer}</p>
        <p>Director: {props.foundFilm.director}</p>
        <p>Story: {props.foundFilm.description}</p>
        <p>Running time: {props.foundFilm.running_time} min</p>
        <br></br>

        <img src={props.foundFilm.image} width="50%" alt="images" />

        {/* {console.log("detail found", props.foundFilm.people)} */}
        {/* {console.log("detail Film", props.foundFilm)} */}
      </div>
    </div>
  );
};

export default Detail;
