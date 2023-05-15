import React from 'react';
import s from './MainScreen.module.css';
import tamasha from '../../../assets/watch/tamasha.png';
import watch from '../../../assets/watch/watch.svg';
import plus from '../../../assets/watch/plus.svg';
import imbd from '../../../assets/movie-card/imdb.png';
import SideBar from '../SideBar/SideBar';
const MainScreen = () => {
  return (
    <div className={s.main}>
      <SideBar />
      <div className={s.main__content}>
        <img className={s.main__img} src={tamasha} alt="" />
        <div className={s.main__text}>
          Ved and Tara fall in love while on a holiday in Corsica and decide to
          keep their real identities undisclosed. Tara returns to Delhi and
          meets a new Ved, who is trying to discover his true self.
        </div>
        <div className={s.main__title}>GENRES</div>
        <div className={s.main__subtitle}>Romance, Drama</div>
        <div className={s.main__button}>
          <button className={s.watch__button}>
            <div className={s.btn__text}>WATCH</div>
            <img src={watch} alt="watch" className={s.img__icon} />
          </button>
          <button className={s.list__button}>
            <div className={s.btn__text}>MY LIST</div>
            <div className={s.btn__icon}>
              <img src={plus} alt="plus" className={s.img__icon} />
            </div>
          </button>
        </div>
        <div className={s.watch__details}>
          <img src={imbd} alt="imbd" />
          <div className={s.watch__rating}>7.3</div>
          <div className={s.watch__country}>U/A</div>
          <div className={s.watch__views}>4K</div>
          <div className={s.watch__year}>2015</div>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
