import './index.css';

function Footer () {
    return (
        <div className='footer'>

            <div className="footer__items">
                <div className="footer__colums">
                <button><i class='fas fa-globe'></i> <span>English</span>  <i class='fas fa-angle-down'></i></button>
                </div>
                <div className="footer__colums">
                    <div className="footer__title">NAVIGATION</div>
                    <div className="footer__info">
                        <a href="#">Home</a>
                        <a href="#">FAQ</a>
                        <a href="#">Invester Relations</a>
                        <a href="#">Jobs</a>
                        <a href="#">About Us</a>
                        <a href="#">Helps Centre</a>
                    </div>
                </div>
                <div className="footer__colums">
                    <div className="footer__title">LEGAL</div>
                    <div className="footer__info">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Cookie Preferences</a>
                        <a href="#">Corporate Information</a>
                    </div>
                </div>
                <div className="footer__colums">
                    <div className="footer__title">TALK TO US</div>
                    <div className="footer__info">
                        <div>support@ercom.com</div>
                        <div>+66 2399 1145</div>
                    </div>   
                </div>
                <div className="footer__colums">
                    <div class="footer__title">FOLLOW US</div>
                    <div class="footer__social">
                        <a  href="#" target="blank">
                            <i class="fa fa-facebook-f" aria-hidden="true"></i>
                        </a>
                        <a href="#" target="blank">
                            <i class="fa-brands fa-twitter" aria-hidden="true"></i>
                        </a>
                        <a  href="#" target="blank">
                            <i class="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer__items">© 2022 Dramatic. All Rights Reserved.</div>
        
        </div>

    )
}

export default Footer