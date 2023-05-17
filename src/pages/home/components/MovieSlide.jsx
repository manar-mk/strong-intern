import Button from "./ui/Button";
import triangle from "../../../../public/triangle.svg";
import plus from "../../../../public/plus.svg";
import { grayButton, purpleButton } from "../../../styles";
import s from "./mainposter.module.css";

export default function MovieSlide({ movie, handleOpen, genresData }) {
  return (
    <div>
      <div className={s.content__container}>
        <h1 className={s.movie__title}>{movie.title}</h1>
        <p className={s.movie__overview} dir="auto">
          {movie.overview}
        </p>
        <div className={s.genre__container}>
          <p className={s.genre__container_title}>Genres</p>
          <p className={s.genre__container_genres}>{genresData.join(", ")}</p>
        </div>
        <div className={s.button__container}>
          <div onClick={() => handleOpen(movie.id)}>
            <Button
              text="Watch"
              icon={triangle}
              buttonStyle={purpleButton.button}
              textStyle={purpleButton.text}
            />
          </div>
          <Button
            buttonStyle={grayButton.button}
            textStyle={grayButton.text}
            text="My List"
            icon={plus}
          />
        </div>
        <div className={s.rating__container}>
          <img
            className={s.imdb__img}
            src="src/assets/imdb.svg"
            alt="imdb-icon"
          />
          <span className={s.imdb__rate}>{movie.vote_average}</span>
          <img
            className={s.ua__img}
            src="src/assets/icons/ua.svg"
            alt="ua-icon"
          />
          <img
            className={s.resolution__img}
            src="src/assets/icons/4k.svg"
            alt="4k-icon"
          />
          <span className={s.movie__year}>
            {movie ? movie.release_date.slice(0, 4) : ""}
          </span>
        </div>
      </div>
    </div>
  );
}
