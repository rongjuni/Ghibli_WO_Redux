/*eslint-disable*/

import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Detail = (props) => {
  // const [found, setFound] = useState(props.foundFilm); // selected API of Films passed from Films.jsx //
  // const [people, setPeople] = useState([]); // People API stored

  const navigate = useNavigate();
  const location = useLocation();
  const { clickedApi } = location.state.clickedApi;

  return (
    <div className="container">
      <h1>Detail</h1>

      <button
        onClick={() => {
          navigate("/Films");
        }}
      >
        ◀️ Back
      </button>
      <hr />

      <div className>
        <h2>Title: {clickedApi.title}</h2>
        <p>Original Title: {clickedApi.original_title}</p>
        <p>Producer: {clickedApi.producer}</p>
        <p>Director: {clickedApi.director}</p>
        <p>Story: {clickedApi.description}</p>
        <p>Running time: {clickedApi.running_time} min</p>
        <br></br>

        <img
          src={clickedApi.image}
          width="50%"
          alt="images"
          style={{ marginBottom: "30px" }}
        />
      </div>
    </div>
  );
};

export default Detail;
