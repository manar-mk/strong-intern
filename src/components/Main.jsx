import React, { useEffect, useState } from "react";
import axios from "axios";

import requests from "../Requests";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestTopRated).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  console.log(movie);
  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover "
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
          <p className="py-2 text-sm w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] ">
            {movie?.overview}
          </p>
          <h1 className="text-red-500 text-lg">GENRES</h1>
          <p className="text-white">
            {movie?.genre_ids?.map((genre) => genre.name).join(", ")}
          </p>

          <div className="my-4">
            <button className="rounded-3xl bg-buttons text-white py-2 px-5">
              WATCH
            </button>
            <button className="rounded-3xl bg-gray-700 ml-4 text-white py-2 px-5">
              MY LIST
            </button>
          </div>
          <div className="flex">
            <img src="/assets/imdb.svg" alt="imdb" />
            <p className="p-2 text-xl">{movie?.vote_average}</p>
            <p className="p-2 text-xl">{movie?.release_date.substr(0, 4)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
