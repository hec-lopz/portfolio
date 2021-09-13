import "./js/toggleMenu";
import { resizeViewport } from "./js/resizeViewport";
import "./stylus/main.styl";
import { getData } from "./js/addData";
import React from "react";
import ReactDOM from "react-dom";
import Projects from "./components/Projects";

ReactDOM.render(<Projects />, document.getElementById("projects-container"));
getData();
// import data from "../public/data.json";

import addData from "./js/addData";

// fetch(data)
//   .then((data) => data.json())
//   .then((json) => {
//     json.projects.forEach((project) => {
//       addData(project);
//     });
//     console.log(json);
//   });

resizeViewport();
