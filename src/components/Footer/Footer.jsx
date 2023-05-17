import React from 'react';
import SelectLan from '../SelectLan/SelectLan';
import s from './Footer.module.css';
import facebook from '../../assets/footer/facebook.svg';
import linkedin from '../../assets/footer/linkedin.svg';
import twitter from '../../assets/footer/twitter.svg';
const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.footer__navigation}>
        <SelectLan />
        <div className={s.footer__container__column}>
          <h6 className={s.navigation__text}>Navigation</h6>
          <ul className={s.footer__lists}>
            <li>
              <a href="#">Home </a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Investor Relations</a>
            </li>
            <li>
              <a href="#">Jobs</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Help Centre</a>
            </li>
          </ul>
        </div>

        <div className={s.footer__container__column}>
          <h6 className={s.navigation__text}>LEGAL</h6>
          <ul className={s.footer__lists}>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Cookie Preferences</a>
            </li>
            <li>
              <a href="#">Corporate Information</a>
            </li>
          </ul>
        </div>

        <div className={s.footer__container__column}>
          <h6 className={s.navigation__text}> TALK TO US</h6>
          <ul className={s.footer__lists}>
            <li>
              <a href="#">support@ercom.com</a>
            </li>
            <li>
              <a href="#">+66 2399 1145</a>
            </li>
          </ul>
        </div>

        <div className={s.footer__container__column}>
          <h6 className={s.navigation__text}> FOLLOW US</h6>
          <div className={s.footer__links}>
            <a href="https://www.facebook.com/" target="blank">
              <img src={facebook} alt="" />
            </a>
            <a href="https://www.linkedin.com/" target="blank">
              <img src={linkedin} alt="" />
            </a>
            <a href="https://twitter.com/" target="blank" class="twitter-icon">
              <img src={twitter} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
