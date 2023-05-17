import React, { useState } from 'react';
import s from './FilmDetails.module.css';
import watch from '../../assets/watch/watch.svg';
import plus from '../../assets/watch/plus.svg';
import imbd from '../../assets/movie-card/imdb.png';
import SideBar from '../SideBar/SideBar';
import Modal from '../Modal/Modal';
function FilmDetails({ title, description, genres, date, rating, poster }) {
  const [modal, setModal] = useState(false);
  const filmVideo = () => {
    setModal(true);
  };
  return (
    <div
      style={{
        background: `linear-gradient(90deg, rgba(0,0,0,0.9500175070028011) 27%, rgba(102,80,165,0) 100%, rgba(0,212,255,1) 100%), url(${poster})`,
      }}
      className={s.film}
    >
      <SideBar />
      <Modal isOpen={modal} />
      <div className={s.film__content}>
        <h1 className={s.film__details__heading}>{title}</h1>
        <p className={s.main__text}>{description}</p>
        <h3 className={s.genre__heading}>Genre</h3>
        <div className={s.genre__list}>
          {genres &&
            genres.map((genre) => (
              <span className={s.genre__title} key={genre.id}>
                {genre.name},
              </span>
            ))}
        </div>
        <div className={s.main__button}>
          <button className={`${s.watchlist__button} ${s.watch__button}`}>
            <button className={s.btn__text}>WATCH</button>
            <img src={watch} alt="watch" className={s.img__icon} />
          </button>
          <button
            onClick={() => filmVideo()}
            className={`${s.watchlist__button} ${s.list__button}`}
          >
            <div className={s.btn__text}>MY LIST</div>
            <div className={s.btn__icon}>
              <img src={plus} alt="plus" className={s.img__icon} />
            </div>
          </button>
        </div>
        <div className={s.watch__details}>
          <img src={imbd} alt="imbd" />
          <div className={s.watch__rating}>{rating}</div>
          <div className={s.watch__country}>U/A</div>
          <div className={s.watch__views}>4K</div>
          <div className={s.watch__year}>{new Date(date).getFullYear()}</div>
        </div>
      </div>
    </div>
  );
}

export default FilmDetails;
