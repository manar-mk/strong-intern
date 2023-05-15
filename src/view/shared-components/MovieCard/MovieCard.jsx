import React from 'react';
import s from './MovieCard.module.css';
import cardImage from '../../../assets/movie-card/card.png';
import eyeIcon from '../../../assets/movie-card/eye.svg';
import likeIcon from '../../../assets/movie-card/like.svg';
import imbdIcon from '../../../assets/movie-card/imdb.png';

const MovieCard = () => {
  return (
    <div className={s.card}>
      <div className={s.card__image}>
        <img src={cardImage} alt="film" />
      </div>
      <div className={s.card__title}>Kumbalangi Nights</div>
      <div className={s.card__year}>2019</div>
      <div className={s.card__details}>
        <div className={s.details__left}>
          <div className={s.card__imbd}>
            <img src={imbdIcon} alt="imbd" />
          </div>
          <div className={s.card__rating}>8.6</div>
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
  );
};

export default MovieCard;
