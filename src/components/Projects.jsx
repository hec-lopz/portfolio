import "./styles/_projects.styl";
import { getData } from "../js/addData";
import Card from "./Card.jsx";
import React, { useState } from "react";
const promise = getData();
const Projects = () => {
  const [data, setData] = useState([]);

  promise.then((arr) => {
    setData(arr);
  });

  // setData([...arr]);
  if (data.length === 0) {
    return <h1>Cargando</h1>;
  } else {
    return (
      <div className="grid-container">
        <Card project={data[0]}></Card>
      </div>
    );
  }
};

export default Projects;
