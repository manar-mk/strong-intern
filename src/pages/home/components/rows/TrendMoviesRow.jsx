import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./cards/MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import s from "./row.module.css";

import "swiper/css";

export default function TrendMoviesRow({ title, url, rowId }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setMovies(response.data.results);
    });
  }, [url]);

  return (
    <section style={{position: "relative", marginTop: "2rem"}}>
      <div className={s.row__container}>
        <h2 className={s.row__container_title}>{title}</h2>
        <Swiper slidesPerView="auto" spaceBetween={50} style={{ width: "100%", height: "100%" }}>
          {movies &&
            movies.map((movie) => {
              return (
                <SwiperSlide key={movie.id} className={s.row}>
                  <MovieCard movie={movie} />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </section>
  );
}
