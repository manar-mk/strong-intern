import { useState, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import s from "./similarmovies.module.css";

export default function SimilarMovies({ similarMovie }) {
  const { id, title, poster_path, backdrop_path } = similarMovie;
  const [isHovered, setIsHovered] = useState(false);

  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate(`/movie/similarMovie/${id}`);
    window.location.reload();
  }, [id, navigate]);

  const imageSrc = useMemo(() => {
    return `https://image.tmdb.org/t/p/original/${backdrop_path}`;
  }, [backdrop_path]);

  const containerClass = useMemo(() => {
    return isHovered ? `${s.similar__movies__container} ${s.hovered}` : s.similar__movies__container;
  }, [isHovered]);

  return (
    <div
      className={containerClass}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={imageSrc}
        alt=""
        className={s.similar__movies__container_img}
      />
      {isHovered && (
        <div className={s.similar__movies__container_title}>{title}</div>
      )}
    </div>
  );
}
