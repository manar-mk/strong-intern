import React from 'react';
import s from './Header.module.css';
import logo from '../../../assets/header/DRAMATIC.png';
import search from '../../../assets/header/search.svg';
import gift from '../../../assets/header/gift.svg';
import bell from '../../../assets/header/bell.svg';
import Ellipse from '../../../assets/header/Ellipse.svg';
const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.header__inner}>
        <div className={s.header__left}>
          <div className={s.navbar__logo}>
            <img src={logo} alt="dramatic" />
          </div>
          <ul className={s.navbar__menu}>
            <li class={s.navbar__item}>
              <a href="/" class="navbar__link">
                HOME
              </a>
            </li>
            <li class={s.navbar__item}>
              <a href="/tv-show" class="navbar__link">
                TV SHOW
              </a>
            </li>
            <li class={s.navbar__item}>
              <a href="/movies" class="navbar__link">
                MOVIES
              </a>
            </li>
            <li class={s.navbar__item}>
              <a href="/new" class="navbar__link">
                NEW
              </a>
            </li>
          </ul>
        </div>
        <div className={s.header__right}>
          <div className={s.navbar__search}>
            <input
              className={s.input__search}
              type="text"
              placeholder="SERCH"
            ></input>
            <button>
              <img src={search} alt="search" />
            </button>
          </div>
          <div className={s.user__menu}>
            <div className={s.navbar__gift}>
              <img src={gift} alt="gift" />
            </div>
            <div className={s.navbar__bell}>
              <img src={bell} alt="gift" />
            </div>
            <div className={s.navbar__profile}>
              <img src={Ellipse} alt="gift" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
