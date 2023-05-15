import React from 'react';
import SelectLan from '../../../ui/SelectLan/SelectLan';
import s from './Footer.module.css';
const Footer = () => {
  return (
    <div className={s.footer}>
      <SelectLan />
    </div>
  );
};

export default Footer;
