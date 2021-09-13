import "./styles/_card.styl";
import React, { useState } from "react";
import { storage } from "../firebase/config";
import { ref, getDownloadUrl } from "@firebase/storage";

const Card = ({ project }) => {
  // const data = getData();
  return (
    <article className="card">
      <div className="card__header">
        <h2 className="card__title">{project.title}</h2>
        <div className="technologies card__technologies">
          <ul className="technologies__list">
            <li className="technologies__item">
              <span className="technologies__tooltip">JavaScript</span>
              <i className="technologies__icon fab fa-js-square"></i>
            </li>
            <li className="technologies__item">
              <span className="technologies__tooltip">CSS</span>
              <i className="technologies__icon fab fa-css3-alt"></i>
            </li>
            <li className="technologies__item">
              <span className="technologies__tooltip">HTML5</span>
              <i className="technologies__icon fab fa-html5"></i>
            </li>
          </ul>
        </div>
      </div>
      <figure className="card__fig">
        <img
          className="card__img img"
          src={project.screenshot}
          alt="Vista previa de Job Listings"
        />
      </figure>
      <div className="card__body">
        <p className="card__description">{project.description}</p>
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
