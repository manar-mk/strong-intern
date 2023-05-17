import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import s from './MovieList.module.css';
import CardHeading from './CardHeading/CardHeading';
import { usePopularMovies } from '../../queries/use-popular-movies';

const MovieList = () => {
  const { isFetching, isFetched, data } = usePopularMovies();

  console.log('DATA:', data);

  return (
    <div>
      <div className={s.cards__wrapper}>
        <div className={s.cards__bg}>
          <CardHeading>{'MOVIES YOU MUST WATCH'}</CardHeading>
          <div className={s.card__flex}>
            {isFetching && <span className={s.loading}>Loading</span>}
            {isFetched &&
              data.results.map((film) => (
                <MovieCard
                  id={film.id}
                  poster_path={film.poster_path}
                  title={film.title}
                  vote_average={film.vote_average}
                  release_date={film.release_date}
                  key={film.id}
                ></MovieCard>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
