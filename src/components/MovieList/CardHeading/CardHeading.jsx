import React from 'react';
import s from './CardHaeding.module.css';
import filterIcon from '../../../assets/movie-card/filter-icon.svg';
const CardHeading = ({ children, hasFilterButton = true }) => {
  return (
    <div className={s.card__header}>
      <div className={s.card__name}>{children}</div>
      {hasFilterButton && (
        <button className={s.btn__filter}>
          <div className={s.btn__text}>FILTERS</div>
          <div className={s.btn__icon}>
            <img src={filterIcon} alt="filter" />
          </div>
        </button>
      )}
    </div>
  );
};

export default CardHeading;
