import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import s from "./contentlistitem.module.css";

export default function ContentListItem({ title, name, item }) {
  const location = useLocation();
  const navigate = useNavigate();

  const maxTitleSize = 15;

  const truncatedTitleMovie = useMemo(() => {
    return title && title.length > maxTitleSize
      ? `${title.slice(0, maxTitleSize)}...`
      : title;
  }, [title, maxTitleSize]);

  const truncatedTitleTv = useMemo(() => {
    return name && name.length > maxTitleSize
      ? `${name.slice(0, maxTitleSize)}...`
      : name;
  }, [name, maxTitleSize]);

  const handleNavigateMovie = (id) => {
    navigate(`/movie/${id}`);
  }

  const handleNavigateTv = (id) => {
    navigate(`/tv/${id}`);
  }

  return (
    <div style={{ color: "white" }}>
      {location.pathname === "/movies" && title && (
        <div className={s.card__container}>
          <img
            src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
            alt={title}
            className={s.card__img}
            onClick={() => handleNavigateMovie(item.id)}
          />
          <p className={s.card__title}>{truncatedTitleMovie}</p>
          <div className={s.card__footer}>
            <div className={s.card__footer_item}>
              <img
                src="./src/assets/imdb.svg"
                alt="imdb-img"
                width="28px"
                height="14px"
              />
              <span className={s.vote__average}>{item.vote_average}</span>
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
      )}
      {location.pathname === "/tvserials" && name && (
        <div className={s.card__container}>
          <img
            src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
            alt={name}
            className={s.card__img}
            onClick={() => handleNavigateTv(item.id)}
          />
          <p className={s.card__title}>{truncatedTitleTv}</p>
          <div className={s.card__footer}>
            <div className={s.card__footer_item}>
              <img
                src="./src/assets/imdb.svg"
                alt="imdb-img"
                width="28px"
                height="14px"
              />
              <span className={s.vote__average}>{item.vote_average}</span>
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
      )}
    </div>
  );
}
