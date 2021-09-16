import "./styles/_card.styl";
import webpackIcon from "../assets/webpack.svg";
import firebaseIcon from "../assets/Firebase_Logo2.svg";
import React, { useState } from "react";
import { getImgUrl } from "../js/dataFunctions";

const icons = {
  javascript: "fa-js-square",
  css: "fa-css3-alt",
  html5: "fa-html5",
  html: "fa-html5",
  grunt: "fa-grunt",
  react: "fa-react",
  firebase: firebaseIcon,
  webpack: webpackIcon,
};

const Card = ({ project }) => {
  const { title, description, technologies, screenshot } = project;
  const [img, setImg] = useState("");
  getImgUrl(screenshot).then((res) => setImg(res));

  return (
    <article className="card">
      <div className="card__header">
        <h2 className="card__title">{title}</h2>
        <div className="technologies card__technologies">
          <ul className="technologies__list">
            {technologies.map((item, i) => (
              <li key={i} className="technologies__item">
                <span className="technologies__tooltip">{item}</span>
                {/fa-/.test(icons[item.toLowerCase()]) ? (
                  <i
                    className={
                      "technologies__icon fab " + icons[item.toLowerCase()]
                    }
                  ></i>
                ) : (
                  <img
                    src={icons[item.toLowerCase()]}
                    className="technologies__icon technologies__icon--img"
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <figure className="card__fig">
        <img
          className="card__img img"
          src={img}
          alt="Vista previa de Job Listings"
        />
      </figure>
      <div className="card__body">
        <p className="card__description">{description}</p>
        <div className="card__links">
          <a
            target="blank"
            href={project["demo-url"]}
            className="button card__btn card__btn--project"
          >
            View project
          </a>
          <a
            target="blank"
            href={project["gh-url"]}
            className="button card__btn card__btn--git"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </article>
  );
};

export default Card;
