import React from 'react';
import s from './CardHaeding.module.css';
import filterIcon from '../../../../assets/movie-card/filter-icon.svg';
const CardHeading = () => {
  return (
    <div className={s.card__header}>
      <div className={s.card__name}>MOVIES YOU MUST WATCH</div>

      <button className={s.btn__filter}>
        <div className={s.btn__text}>FILTERS</div>
        <div className={s.btn__icon}>
          <img src={filterIcon} alt="filter" />
        </div>
      </button>
    </div>
  );
};

export default CardHeading;
