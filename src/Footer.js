import React from 'react';

function Footer() {
    return (
      <footer className="footer">
        <div className='footer-content'>
        <div className='footer-lang'>
            <img src="/images/globe.png" className='footer-lang-globe'/>
            <div>English</div>
            <img src="/images/Vector.png" className='footer-lang-vector'/>
        </div>
        <div className='footer-nav_leg_talk'>
            <div className='footer-nav_leg_talk-title'>NAVIGATION</div>
            <div className='footer-nav_leg_talk-content'>
            <div>Home</div>
            <div>FAQ</div>
            <div>Investor Relations</div>
            <div>Jobs</div>
            <div>About Us</div>
            <div>Help Centre</div>
            </div>
        </div>
        <div className='footer-nav_leg_talk'>
            <div className='footer-nav_leg_talk-title'>LEGAL</div>
            <div className='footer-nav_leg_talk-content'>
            <div>Privacy Policy</div>
            <div>Terms of Service</div>
            <div>Cookie Preferences</div>
            <div>Corporate Information</div>
            </div>
        </div>
        <div className='footer-nav_leg_talk'>
            <div className='footer-nav_leg_talk-title'>TALK TO US</div>
            <div className='footer-nav_leg_talk-content'>
            <div>support@ercom.com</div>
            <div>+66 2399 1145</div>
            </div>
        </div>
        <div className='footer-follow'>
            <div className='footer-nav_leg_talk-title'>FOLLOW US</div>
            <div className='footer-follow-socmedia'>
            <img src="/images/Facebook_Icon.png" className='footer-follow-socmedia-icon'/>
            <img src="/images/Linkedin_Icon.png" className='footer-follow-socmedia-icon'/>
            <img src="/images/Twitter_Icon.png" div className='footer-follow-socmedia-icon'/>
            </div>
        </div>
        </div>
        <div className='footer-lastline'>© 2022 Dramatic. All Rights Reserved. </div>
      </footer>
    );
  }
  
  export default Footer;