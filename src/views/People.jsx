/*eslint-disable*/

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const People = (props) => {
  const [peopleList, setPeopleList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (peopleList.length === 0) {
      fetchPeople();
    }
  }, []);

  const fetchPeople = () => {
    console.log("fetching People");
    fetch("https://ghibliapi.herokuapp.com/people", { mode: "cors" })
      .then((response) => response.json())
      .then((result) => {
        setPeopleList(result);
      })
      .catch((error) => console.log(error));
  };

  console.log(peopleList);

  return (
    <div className="container">
      <h1>PEOPLE</h1>

      <button
        onClick={() => {
          navigate("/films");
        }}
      >
        ◀️
      </button>

      <hr />

      <div className="row">
        {peopleList.map(function (val, ind) {
          return (
            <PeopleCard
              setPassedId={props.setPassedId}
              peopleList={peopleList}
              val={val}
              ind={ind}
            ></PeopleCard>
          );
        })}
      </div>
    </div>
  );
};

function PeopleCard(props) {
  let navigate = useNavigate();

  return (
    <div
      className="card col-md-4"
      onClick={() => {
        {
          props.setPassedId(props.peopleList[props.ind].id);
          console.log(props.peopleList[props.ind].id);
        }
      }}
    >
      <div className="card-body">
        <h3> {props.val.name}</h3>
        <p> Age: {props.val.age}</p>
        <p> Gender: {props.val.gender}</p>
      </div>
    </div>
  );
}

export default People;
