import React from 'react';

function Header() {
    return (
      <header className="header">
        <img src="/images/DRAMATIC.png" className='header-title' />
        <div className='header-text'>HOME</div>
        <div className='header-text'>TV SHOW</div>
        <div className='header-text'>MOVIES</div>
        <div className='header-text'>NEW</div>
        <div className='header-searchbar'>
          <div className='header-searchbar-text'>SEARCH</div>
          <img src="/images/search.png" className='header-searchbar-icon'/>
        </div>
        <img src="/images/gift.png" className='header-gift'/>
        <img src="/images/bell.png" className='header-bell'/>
        <img src="/images/Ellipse.png" className='header-account' />
      </header>
    );
  }
  
  export default Header;