import React from 'react';
import s from './SelectLan.module.css';
import globeIcon from '../../assets/footer/globe.svg';
import selectIcon from '../../assets/footer/select.svg';
const SelectLan = () => {
  return (
    <button className={s.select__container}>
      <img src={globeIcon} alt="globe" />
      <div className={s.select__language}>English</div>
      <img src={selectIcon} alt="select" />
    </button>
  );
};

export default SelectLan;
