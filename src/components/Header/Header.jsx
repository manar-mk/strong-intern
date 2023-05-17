import React from 'react';
import { Link } from 'react-router-dom';
import s from './Header.module.css';
import logo from '../../assets/header/DRAMATIC.png';
import search from '../../assets/header/search.svg';
import gift from '../../assets/header/gift.svg';
import bell from '../../assets/header/bell.svg';
import Ellipse from '../../assets/header/Ellipse.svg';
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
              <Link to="/" class="navbar__link">
                HOME
              </Link>
            </li>
            <li class={s.navbar__item}>
              <Link to="/tv-show" class="navbar__link">
                TV SHOW
              </Link>
            </li>
            <li class={s.navbar__item}>
              <Link to="/movies" class="navbar__link">
                MOVIES
              </Link>
            </li>
            <li class={s.navbar__item}>
              <Link to="/new" class="navbar__link">
                NEW
              </Link>
            </li>
          </ul>
        </div>
        <div className={s.header__right}>
          <div className={s.navbar__search}>
            <input
              className={s.input__search}
              type="text"
              placeholder="SEARCH"
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
              <img src={bell} alt="bell" />
            </div>
            <div className={s.navbar__profile}>
              <img src={Ellipse} alt="Ellipse" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
