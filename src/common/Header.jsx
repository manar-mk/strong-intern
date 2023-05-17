import { useState } from "react";
import { NavLink } from "react-router-dom";
import s from "./styles/header.module.css";
import logo from "../../public/DRAMATIC-logo.svg";
import search_icon from "../../public/search.svg";
import gift__icon from "../../public/gift.svg";
import bell__icon from "../../public/bell.svg";
import person__icon from "../../public/user.svg";

export default function Header() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <header className={s.header}>
      <nav className={s.navbar}>
        <a href="/">
          <img className={s.logo} src={logo} alt="dramatic logo" />
        </a>
        <ul className={s.navbar__menu}>
          <li className={s.nav__item}>
            <NavLink
              to="/"
              className={`${s.nav__link} ${hoveredItem === "home" || location.pathname === "/" ? s.active : ""}`}
              onMouseEnter={() => handleMouseEnter("home")}
              onMouseLeave={handleMouseLeave}
            >
              Home
            </NavLink>
          </li>
          <li className={s.nav__item}>
            <NavLink
              to="/tvserials"
              className={`${s.nav__link} ${hoveredItem === "tvserials" || location.pathname === "/tvserials" ? s.active : ""}`}
              onMouseEnter={() => handleMouseEnter("tvserials")}
              onMouseLeave={handleMouseLeave}
            >
              Tv Shows
            </NavLink>
          </li>
          <li className={s.nav__item}>
            <NavLink
              to="/movies"
              className={`${s.nav__link} ${hoveredItem === "movies" || location.pathname === "/movies" ? s.active : ""}`}
              onMouseEnter={() => handleMouseEnter("movies")}
              onMouseLeave={handleMouseLeave}
            >
              Movies
            </NavLink>
          </li>
          <li className={s.nav__item}>
            <NavLink
              to="/statistics"
              className={`${s.nav__link} ${hoveredItem === "statistics" || location.pathname === "/statistics" ? s.active : ""}`}
              onMouseEnter={() => handleMouseEnter("statistics")}
              onMouseLeave={handleMouseLeave}
            >
              Statistics
            </NavLink>
          </li>
        </ul>
        <div className={s.input__container}>
          <input type="text" placeholder="SEARCH" />
          <img src={search_icon} alt="search icon" />
        </div>
        <div className={s.profile__container}>
          <img src={gift__icon} alt="gift icon" />
          <img src={bell__icon} alt="bell icon" />
          <img
            src={person__icon}
            width="60px"
            height="60px"
            alt="person-profile"
          />
        </div>
      </nav>
    </header>
  );
}
