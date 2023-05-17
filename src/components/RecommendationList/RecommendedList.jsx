import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import s from './RecommendedList.module.css';
import CardHeading from '../MovieList/CardHeading/CardHeading';
import { useRecommendedMovies } from '../../queries/use-recommended-movies';

const RecommendedList = (props) => {
  const { isFetching, isFetched, data } = useRecommendedMovies();

  console.log('DATA:', data);
  return (
    <div>
      <div className={s.cards__wrapper}>
        <div className={s.cards__bg}>
          <CardHeading hasFilterButton={false}>
            {'RECOMMENDED FOR YOU'}
          </CardHeading>
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

export default RecommendedList;
