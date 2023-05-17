import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useMemo } from "react";
import { IMDB_API_KEY } from "../../requests";
import { useState } from "react";
import MoviePoster from "./components/MoviePoster";
import { requests } from "../../requests";
import ActorsList from "./components/actors/ActorsList";
import YouTube from "react-youtube";
import SimilarMovies from "./components/similar-movies/SimilarMovies";
import s from "./moviedetails.module.css";

export default function MovieDetails() {
  const [movieData, setMovieData] = useState();
  const [movieTrailer, setMovieTrailer] = useState(null);
  const [genres, setGenres] = useState([]);
  const [similarMovies, setSimilar] = useState([]);

  const apiKey = IMDB_API_KEY;
  const params = useParams();

  const opts = {
    height: "200",
    width: "350",
    playerVars: {
      autoplay: 0,
    },
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=${apiKey}&append_to_response=videos`
      )
      .then((response) => {
        setMovieData(response.data);
        console.log(response.data.videos.results);
        const movieTrailerId = response.data.videos.results.find((video) => {
          return video.name === "Official Trailer";
        });
        setMovieTrailer(
          movieTrailerId ? movieTrailerId : response.data.videos.results[0]
        );
      })
      .catch((error) => {
        console.log(error);
      });

    axios.get(requests.genreMovies).then((response) => {
      console.log(response.data.genres);
      setGenres(response.data.genres);
    });

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.id}/similar?api_key=${apiKey}&language=en-US&page=1`
      )
      .then((response) => {
        console.log(response.data.results);
        setSimilar(response.data.results);
      });
  }, []);

  const genresData = useMemo(() => {
    if (movieData && movieData.genres) {
      return movieData.genres
        .map((genre) => {
          return genres.find((g) => g.id === genre.id)?.name || "";
        })
        .filter((name) => name !== "");
    }
    return [];
  }, [genres, movieData]);

  const truncateSimilarMovies = useMemo(() => {
    if (similarMovies && similarMovies.length > 5) {
      return similarMovies.slice(0, 5);
    }
    return [];
  }, [similarMovies]);

  return (
    <>
      <div style={{ maxWidth: "100%", overflowX: "hidden", height: "100vh" }}>
        <MoviePoster
          movieTrailer={movieTrailer}
          movie={movieData}
          genresData={genresData}
        >
          <div className={s.movie__details__container}>
            <div className={s.movie__trailer__container}>
              <h2 className={s.movie__trailer__container_title}>Trailer</h2>
              <YouTube
                videoId={movieTrailer ? movieTrailer.key : null}
                opts={opts}
              />
            </div>
            <ActorsList />
          </div>
        </MoviePoster>
        <h2 className={s.similar__movies_title}>More Like This</h2>
        <div className={s.similar__movies_container}>
          {similarMovies &&
            truncateSimilarMovies.map((similarMovie) => {
              return (
                <SimilarMovies
                  key={similarMovie.id}
                  similarMovie={similarMovie}
                  movieId={similarMovie.id}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}
