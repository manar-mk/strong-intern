import React from 'react';

function Banner(props) {
    return (
      <div className='banner'>
        <img src="/images/tamasha.png" className='banner-title' />
        <div className='banner-synops'>Ved and Tara fall in love while on a holiday in Corsica and decide to keep their real identities undisclosed. Tara returns to Delhi and meets a new Ved, who is trying to discover his true self.</div>
        <div className='banner-genre'>GENRES</div>
        <div className='banner-genre2'>Romance, Drama</div>
        <div className='banner-actions'>
            <div className="banner-actions-watchbox">
            <div>WATCH</div>
            <img src="/images/play.png" className='banner-actions-watchbox-play' />
            </div>

            <div className="banner-actions-mylistbox">
            <div>MY LIST</div>
            <img src="/images/plus.png" className='banner-actions-mylistbox-plus' />
            </div>
        </div>
        <div className='banner-stats'>
            <img src="/images/imbd_banner.png" />
            <div className='banner-stats-rating'>7.3</div>
            <div className='banner-stats-certificate'>U/A</div>
            <div className='banner-stats-certificate'>4K</div>
            <div className='banner-stats-year'>2015</div>
        </div>
      </div>
    );
  }
  
  export default Banner;