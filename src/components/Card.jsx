import "./styles/_card.styl";

const Card = () => {
  return (
    <article class="card">
      <div class="card__header">
        <h2 class="card__title">Job listings</h2>
        <div class="technologies card__technologies">
          <ul class="technologies__list">
            <li class="technologies__item">
              <span class="technologies__tooltip">JavaScript</span>
              <i class="technologies__icon fab fa-js-square"></i>
            </li>
            <li class="technologies__item">
              <span class="technologies__tooltip">CSS</span>
              <i class="technologies__icon fab fa-css3-alt"></i>
            </li>
            <li class="technologies__item">
              <span class="technologies__tooltip">HTML5</span>
              <i class="technologies__icon fab fa-html5"></i>
            </li>
          </ul>
        </div>
      </div>
      <figure class="card__fig">
        <img
          class="card__img img"
          src="./assets/joblist.jpg"
          alt="Vista previa de Job Listings"
        />
      </figure>
      <div class="card__body">
        <p class="card__description">
          List of job positions with filter made with vanilla JavaScript, CSS,
          HTML, Webpack and BEM.
        </p>
        <div class="card__links">
          <a
            target="blank"
            href="https://hec-lopz.github.io/job-list/index"
            class="button card__btn card__btn--project"
          >
            View project
          </a>
          <a
            target="blank"
            href="https://github.com/hec-lopz/job-list"
            class="button card__btn card__btn--git"
          >
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>
    </article>
  );
};

export default Card;
