import React from 'react';
import s from './SideBar.module.css';
import users from '../../../assets/sidebar/users.svg';
import list from '../../../assets/sidebar/list.svg';
import download from '../../../assets/sidebar/download.svg';
import settings from '../../../assets/sidebar/settings.svg';
const SideBar = () => {
  return (
    <div className={s.sidebar}>
      <div className={s.sidebar__content}>
        <button className={s.sidebar__btn}>
          <img src={users} alt="users" />
        </button>
        <button className={s.sidebar__btn}>
          <img src={list} alt="list" />
        </button>
        <button className={s.sidebar__btn}>
          <img src={download} alt="download" />
        </button>
        <button className={s.sidebar__btn}>
          <img src={settings} alt="settings" />
        </button>
      </div>
    </div>
  );
};

export default SideBar;
