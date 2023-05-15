import React, { useEffect, useState } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import s from './MovieList.module.css';
import CardHeading from './CardHeading/CardHeading';

const APIKEY = '7ec7904afc3c747f50ebba3f8bb7b81e';

const initialState = { data: null, isLoading: false, error: null };

const MovieList = (props) => {
  const [popularFilms, setPopularFilms] = useState(initialState);

  useEffect(() => {
    const fetchData = async () => {
      setPopularFilms((state) => ({ ...state, isLoading: true }));
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?include_adult=truе&api_key=${APIKEY}`
      );
      const { results } = await res.json();
      // console.log(data);
      setPopularFilms((state) => ({
        ...state,
        isLoading: false,
        data: results,
      }));
      console.log(results);

      // return data;
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className={s.cards__wrapper}>
        <div className={s.cards__bg}>
          <CardHeading>{'MOVIES YOU MUST WATCH'}</CardHeading>
          <div className={s.card__flex}>
            {popularFilms.isLoading && (
              <span className={s.loading}>Loading</span>
            )}
            {popularFilms.data &&
              popularFilms.data.map((film) => (
                <MovieCard
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
