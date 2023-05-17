import { useState } from "react";
import Button from "../../home/components/ui/Button";
import triangle from "../../../../public/triangle.svg";
import plus from "../../../../public/plus.svg";
import { grayButton, purpleButton } from "../../../styles";
import PlayerModal from "../../../common/PlayerModal";
import s from "./tvposter.module.css";

export default function TvPoster({ tvData, movieTrailer, genresData, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const spokenLanguages =
  tvData && tvData.spoken_languages
      ? tvData.spoken_languages.map((lang) => lang.name).join(", ")
      : "";

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      {tvData && (
        <div
          className={s.image}
          style={{
            backgroundImage: `
            linear-gradient(90deg, #000000 17.76%, rgba(0, 0, 0, 0.687449) 41.44%, rgba(196, 196, 196, 0) 100%),
            url('https://image.tmdb.org/t/p/original/${tvData.backdrop_path}')`,
          }}
        >
          <div className={s.content__container}>
            <h1 className={s.movie__title}>{tvData.name}</h1>
            <p className={s.movie__overview} dir="auto">
              {tvData.overview}
            </p>
            <div className={s.genre__container}>
              <p className={s.genre__container_title}>Genres</p>
              <p className={s.genre__container_genres}>
                {tvData && genresData.join(", ")}
              </p>
            </div>
            <div className={s.button__container}>
              <div onClick={handleOpen}>
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
                src="/src/assets/imdb.svg"
                alt="imdb-icon"
              />
              <span className={s.imdb__rate}>{tvData.vote_average}</span>
              <img
                className={s.ua__img}
                src="/src/assets/icons/ua.svg"
                alt="ua-icon"
              />
              <img
                className={s.resolution__img}
                src="/src/assets/icons/4k.svg"
                alt="4k-icon"
              />
              <span className={s.movie__year}>
                {tvData && tvData.release_date
                  ? tvData.release_date.slice(0, 4)
                  : ""}
              </span>
            </div>
            <div className={s.language__container}>
              <div className={s.language__container_audio}>
                <span className={s.language__container_audio_title}>Audio</span>
                <span className={s.language__container_audio_paragraph}>
                  {tvData && tvData.original_language} - Audio Description,
                  {tvData.original_language} [Original]
                </span>
              </div>
              <div className={s.language__container_audio}>
                <span className={s.language__container_audio_title}>
                  Subtitles
                </span>
                <span className={s.language__container_audio_paragraph}>
                  {spokenLanguages}
                </span>
              </div>
            </div>
          </div>
          {children}
        </div>
      )}
      {isOpen ? (
        <PlayerModal
          movieTrailer={movieTrailer}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      ) : (
        ""
      )}
    </>
  );
}
