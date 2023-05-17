import React from 'react';

function Card({ name, year, rating, image, id, key }) {
    let hero = "/images/movie.png";
    if (image) {
        hero = `https://www.themoviedb.org/t/p/w220_and_h330_face${image}`;
    }
    return (
      <div className='card'>
        <img src={hero} className='card-image'/>
        <div className='card-name'>{name}</div>
        <div className='card-year'>{year}</div>
        <div className='card-stats'>
        <img src="/images/imbd.png" />
        <div className='card-stats-rating'>{rating}</div>
        <img src="/images/eye.png" className='card-stats-eye' />
        <img src="/images/heart.png" />
        </div>
      </div>
    );
  }
  
  export default Card;