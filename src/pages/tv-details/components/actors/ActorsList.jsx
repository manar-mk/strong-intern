import { useState, useEffect } from "react";
import axios from "axios";
import { IMDB_API_KEY } from "../../../../requests";
import { useParams } from "react-router-dom";
import ActorCard from "./actor-card/ActorCard";
import { Swiper, SwiperSlide } from "swiper/react";
import s from "./actorslist.module.css";

import "swiper/css";

export default function ActorsList() {
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);
  const params = useParams();
  const apiKey = IMDB_API_KEY;

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=${apiKey}&language=en-US`
      )
      .then((response) => {
        setCast(response.data.cast);
        setCrew(response.data.crew);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={s.row__container}>
      <h2 className={s.row__container_title}>Cast and Crew Info</h2>
      <Swiper slidesPerView="auto" spaceBetween={60}>
        {cast.map((actor) => {
          return (
            <SwiperSlide key={actor.id} className={s.row}>
              <ActorCard actor={actor} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
