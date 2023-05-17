import imdb from '../assets/imdb.jpg';
import eye from '../assets/eye.svg';
import heart from '../assets/heart.svg';
import { Link } from 'react-router-dom';
import React from 'react';

export const Card = React.memo(({ title, rating, path, id }) => {
    return(
        <Link className="card" to={`/movie/${id}`}>
            <img src={`http://image.tmdb.org/t/p/w500/${path}`} alt="Poster"/>
            <div className='card-info--text'>
                <h1 className='title'>{title}</h1>
                <p className='date'>2015</p>
                <div>
                    <h3 className='rating'><img src={imdb} alt="IMDB"/>{rating}</h3>
                    <span>
                        <Link><img src={eye} /></Link>
                        <Link><img src={heart} /></Link>
                    </span>
                </div>
            </div>
        </Link>
    )
})