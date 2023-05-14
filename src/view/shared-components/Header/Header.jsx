import React from 'react';
import s from './Header.module.css';
const Header = () => {
  return (
    <header className={s.header}>
      <nav className={s.navbar}>
        <div className={s.navbar__logo}>DRAMATIC</div>
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
        <div className={s.navbar__search}></div>
        <div className={s.navbar__gift}></div>
        <div className={s.navbar__bell}></div>
        <div className={s.navbar__user}></div>
      </nav>
    </header>
  );
};

export default Header;
