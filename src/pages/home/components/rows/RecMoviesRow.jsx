import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./cards/MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { requests } from "../../../../requests";
import s from "./recrow.module.css";

import "swiper/css";

export default function RecMoviesRow({ title, url, rowId }) {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      const promises = pages.map((page) => axios.get(`${url}&page=${page}`));
      const responses = await Promise.all(promises);
      const movies = responses.flatMap((response) => response.data.results);
      setMovies(movies);
    };

    getMovies();
  }, [url]);

  useEffect(() => {
    axios.get(requests.genreMovies).then((response) => {
      setGenres(response.data.genres);
    });
  }, []);

  const handleGenreClick = (genre) => {
    const index = selectedGenres.findIndex(
      (selectedGenre) => selectedGenre.id === genre.id
    );
    if (index === -1) {
      setSelectedGenres([...selectedGenres, genre]);
    } else {
      setSelectedGenres(
        selectedGenres.filter((selectedGenre) => selectedGenre.id !== genre.id)
      );
    }
  };

  const filteredMovies = movies.filter((movie) => {
    if (selectedGenres.length === 0) {
      return true;
    } else {
      return selectedGenres.some((genre) => movie.genre_ids.includes(genre.id));
    }
  });

  return (
    <section style={{ position: "relative" }}>
      <div className={s.row__container}>
        <h2 className={s.row__container_title}>{title}</h2>
        <div>
          {genres.map((genre) => (
            <button
              key={genre.id}
              className={
                selectedGenres.some(
                  (selectedGenre) => selectedGenre.id === genre.id
                )
                  ? s.selected
                  : s.unselected
              }
              onClick={() => handleGenreClick(genre)}
            >
              {genre.name}
            </button>
          ))}
        </div>
        <Swiper
          slidesPerView="auto"
          spaceBetween={50}
          style={{ width: "100%", height: "100%" }}
        >
          {filteredMovies.map((movie) => (
            <SwiperSlide key={movie.id} className={s.row}>
              <MovieCard movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
