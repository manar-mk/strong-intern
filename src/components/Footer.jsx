function Footer() {
  return (
    <div className="w-100 text-left  text-white z-10 tracking-normal">
      <div className="flex justify-around w-full h-full box-border  py-28">
        <div className="languages">
          <div className="flex items-center justify-around  opacity-80">
            <img src="/assets/globe.svg" alt="" />
            <span>English</span>
          </div>
        </div>
        <div className="flex flex-col">
          <h5 className="font-bold font-proxima ">NAVIGATION</h5>
          <a className="font-roboto opacity-80 pt-2" href="/">
            Home
          </a>
          <a className="font-roboto opacity-80" href="/">
            FAQ
          </a>
          <a className="font-roboto opacity-80" href="/">
            Investor Relations
          </a>
          <a className="font-roboto opacity-80" href="/">
            Jobs
          </a>
          <a className="font-roboto opacity-80" href="/">
            About Us
          </a>
          <a className="font-roboto opacity-80" href="/">
            Help center
          </a>
        </div>
        <div className="flex flex-col">
          <h5 className="font-bold font-proxima ">LEGAL</h5>
          <a className="font-roboto opacity-80 pt-2" href="/">
            Privacy Policy
          </a>
          <a className="font-roboto opacity-80" href="/">
            Terms of service
          </a>
          <a className="font-roboto opacity-80" href="/">
            Cookie Preferences
          </a>
          <a className="font-roboto opacity-80" href="/">
            Corporate information
          </a>
        </div>
        <div className="flex flex-col">
          <h5 className="font-bold font">TALK TO US</h5>
          <p className="font-roboto opacity-80 pt-2">support@ercom.com</p>
          <p className="font-roboto opacity-80 ">+66 2399 1145</p>
        </div>
        <div className="flex flex-col">
          <h5 className="font-bold font">FOLLOW US</h5>
          <div className="flex py-3">
            <a href="/">
              <img src="/assets/facebook.svg" alt="" />
            </a>
            <a href="/">
              <img src="/assets/linkedin.svg" alt="" />
            </a>
            <a href="/">
              <img src="/assets/twitter.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
      <p className="text-center">© 2022 Dramatic. All Rights Reserved. </p>
    </div>
  );
}

export default Footer;
