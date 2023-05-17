import React from 'react';
import s from './MovieCard.module.css';
import eyeIcon from '../../assets/movie-card/eye.svg';
import likeIcon from '../../assets/movie-card/like.svg';
import imbdIcon from '../../assets/movie-card/imdb.png';
import { Link } from 'react-router-dom';
// adult: false;
// backdrop_path: '/aAgGrfBwna1nO4M2USxwFgK5O0t.jpg';
// genre_ids: (3)[(27, 53, 14)];
// id: 713704;
// original_language: 'en';
// original_title: 'Evil Dead Rise';
// overview: 'Three siblings find an ancient vinyl that gives birth to bloodthirsty demons that run amok in a Los Angeles apartment building and thrusts them into a primal battle for survival as they face the most nightmarish version of family imaginable.';
// popularity: 7702.946;
// poster_path: '/5ik4ATKmNtmJU6AYD0bLm56BCVM.jpg';
// release_date: '2023-04-12';
// title: 'Evil Dead Rise';
// video: false;
// vote_average: 7.2;
// vote_count: 902;
const MovieCard = ({ id, title, vote_average, release_date, poster_path }) => {
  // console.log(title);
  return (
    <Link to={`/movie/${id}`}>
      <div className={s.card}>
        <div className={s.card__image}>
          <img
            className={s.card__img}
            src={'https://image.tmdb.org/t/p/original' + poster_path}
            alt="film"
          />
        </div>
        <h4 className={s.card__title}>{title}</h4>
        <div className={s.card__year}>{release_date}</div>
        <div className={s.card__details}>
          <div className={s.details__left}>
            <div className={s.card__imbd}>
              <img className={s.image__imbd} src={imbdIcon} alt="imbd" />
            </div>
            <div className={s.card__rating}>{vote_average}</div>
          </div>
          <div className={s.details__right}>
            <div className={s.card__eye}>
              <img src={eyeIcon} alt="eye" />
            </div>
            <div className={s.card__like}>
              <img src={likeIcon} alt="like" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
