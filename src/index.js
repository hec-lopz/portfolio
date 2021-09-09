import "./js/toggleMenu";
import { resizeViewport } from "./js/resizeViewport";
import "./stylus/main.styl";
import Card from "./components/Card";
import data from "../public/data.json";

// import { db, storage } from "./firebase/config";
// import { ref } from "firebase/storage";
import addData from "./js/addData";

data.projects.forEach((project) => {
  addData(project);
});

resizeViewport();
