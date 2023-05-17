import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { requests } from "../../../requests";
import MovieSlide from "./MovieSlide";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { useNavigate } from "react-router-dom";
import s from "./mainposter.module.css";

export default function MainPoster() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [movieId, setMovieId] = useState(null);

  const navigate = useNavigate();

  const movie = useMemo(() => {
    return movies[Math.floor(Math.random() * movies.length)];
  }, [movies]);

  useEffect(() => {
    axios.get(requests.popularMovies).then((response) => {
      console.log(response.data.results);
      setMovies(response.data.results);
    });

    axios.get(requests.genreMovies).then((response) => {
      setGenres(response.data.genres);
    });
  }, []);

  const handleOpen = (movieId) => {
    setMovieId(movieId);
    navigate(`/movie/${movieId}`);
  };

  return (
    <>
      {movie && (
        <Swiper
          className={s.poster}
          loop={true}
          slidesPerView={1}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {movies.map((movie) => {
            const genresData = genres
              .filter((genre) => movie.genre_ids.includes(genre.id))
              .map((genre) => genre.name);
            return (
              <SwiperSlide
                key={movie.id}
                style={{
                  backgroundImage: `
                  linear-gradient(90deg, #000000 17.76%, rgba(0, 0, 0, 0.687449) 41.44%, rgba(196, 196, 196, 0) 100%),
            url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')`,
                }}
                className={s.image}
              >
                <MovieSlide
                  movie={movie}
                  handleOpen={handleOpen}
                  genresData={genresData}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </>
  );
}
