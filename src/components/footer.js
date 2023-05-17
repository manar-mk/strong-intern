import globe from '../assets/globe.svg';
import linkedin from '../assets/linkedin.svg';
import twitter from '../assets/Twitter.svg';
import facebook from '../assets/facebook.svg';


function Footer(){
    return(
        <footer className="footer">
            <div className="footer-nav">
                <div className="lang">
                    <img src={globe} alt="Globus"/>
                    <select>
                        <option>English</option>
                        <option>Russian</option>
                    </select>
                </div>
                <ul>
                    Navigation
                    <li>Home</li>
                    <li>FAQ</li>
                    <li>Investor Relations</li>
                    <li>Jobs</li>
                    <li>About Us</li>
                    <li>Help Centre</li>
                </ul>
                <ul>
                    LEGAL    
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Cookie Preferences</li>
                    <li>Corporate Information</li>
                </ul>
                <ul>
                    TALK TO US    
                    <li>support@ercom.com</li>
                    <li>+66 2399 1145</li>
                </ul>
                <div className='social'> 
                    FOLLOW US
                    <div>
                        <a><img src={facebook} alt="Facebook"/></a>
                        <a><img src={linkedin} alt="LinkedIn"/></a>
                        <a><img src={twitter} alt="Twitter"/></a>
                    </div>
                </div>
            </div>
            <div className="footer-copyrights">
                 © 2022 Dramatic. All Rights Reserved. 
            </div>
        </footer>
    )
}


export default Footer;