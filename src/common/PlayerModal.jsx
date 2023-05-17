import YouTube from "react-youtube";
import s from "./styles/playermodal.module.css";

export default function PlayerModal({ movieTrailer, isOpen, setIsOpen }) {
  const handleClose = () => {
    setIsOpen(false);
    movieTrailer = null;
  };

  const opts = {
    height: "420",
    width: "700",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>
      <div className={s.modal__container}>
        <div className={s.modal__content}>
          <img
            src="/src/assets/icons/go-back.svg"
            className={s.close__button}
            onClick={handleClose}
            alt="close-btn"
          />
          <YouTube
            videoId={movieTrailer ? movieTrailer.key : null}
            opts={opts}
          />
        </div>
      </div>
    </>
  );
}
