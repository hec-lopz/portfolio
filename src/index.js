import "./js/toggleMenu";
import { resizeViewport } from "./js/resizeViewport";
import "./stylus/main.styl";
import data from "../public/data.json";

import addData from "./js/addData";

fetch(data)
  .then((data) => data.json())
  .then((json) => {
    json.projects.forEach((project) => {
      addData(project);
    });
    console.log(json);
  });

resizeViewport();
