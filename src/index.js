import "./js/toggleMenu";
import { resizeViewport } from "./js/resizeViewport";
import "./stylus/main.styl";
import React from "react";
import ReactDOM from "react-dom";
import Projects from "./components/Projects";

ReactDOM.render(<Projects />, document.getElementById("projects-container"));

resizeViewport();
