import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import s from "./moviecard.module.css";

export default function MovieCard({ movie, genre }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  const { title, release_date, vote_average, poster_path, original_title } =
    movie;
  const maxTitleSize = 15;
  const truncatedTitle = useMemo(() => {
    return title.length > maxTitleSize
      ? `${title.slice(0, maxTitleSize)}...`
      : title;
  }, [title, maxTitleSize]);

  const year = useMemo(() => {
    return movie ? release_date.slice(0, 4) : "";
  }, [movie, release_date]);

  return (
    <div className={s.card__container} onClick={handleClick}>
      <img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt={original_title}
        className={s.card__img}
      />
      <p className={s.card__title}>{truncatedTitle}</p>
      <p className={s.card__year}>{year}</p>
      <div className={s.card__footer}>
        <div className={s.card__footer_item}>
          <img
            src="./src/assets/imdb.svg"
            alt="imdb-img"
            width="28px"
            height="14px"
          />
          <span className={s.vote__average}>{vote_average}</span>
        </div>
        <div className={s.card__footer_item}>
          <img
            src="src/assets/icons/eye.svg"
            alt="eye-icon"
            width="17px"
            height="16px"
          />
          <img
            src="src/assets/icons/white-heart.svg"
            alt="heart-icon"
            width="14px"
            height="14px"
            className={s.eye}
          />
        </div>
      </div>
    </div>
  );
}
