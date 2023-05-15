import React from 'react';
import s from './SelectLan.module.css';
import globeIcon from '../../assets/footer/globe.svg';
const SelectLan = () => {
  return (
    <div className={s.select__container}>
      <img src={globeIcon} alt="globe" />
    </div>
  );
};

export default SelectLan;
