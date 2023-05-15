import React from 'react';
import MovieCard from '../MovieCard/MovieCard';

import s from './MovieList.module.css';
import CardHeading from './CardHeading/CardHeading';
const MovieList = (props) => {
  return (
    <div>
      <div className={s.cards__wrapper}>
        <div className={s.cards__bg}>
          <CardHeading />
          <div className={s.card__flex}>
            <MovieCard></MovieCard>
            <MovieCard></MovieCard>
            <MovieCard></MovieCard>
            <MovieCard></MovieCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
