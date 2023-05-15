import React from 'react';
import s from './MovieCard.module.css';
import cardImage from '../../../assets/movie-card/card.png';
const MovieCard = () => {
  return (
    <div className={s.card__wrapper}>
      <div className={s.card__name}>MOVIES YOU MUST WATCH</div>
      <div className={s.card__image}>
        <img src={cardImage} alt="film" />
      </div>
      <div className={s.card__title}>Kumbalangi Nights</div>
      <div className={s.card__title}>2019</div>
      <div className={s.card__details}>
        <div className={s.details__left}>
          <div className={s.card__imbd}></div>
          <div className={s.card__rating}></div>
        </div>
        <div className={s.details__right}>
          <div className={s.card__eye}></div>
          <div className={s.card__like}></div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
