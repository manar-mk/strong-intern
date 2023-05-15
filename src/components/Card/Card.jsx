import imdb from '../../images/imdb.png';
import eye from '../../images/eye.png';
import like from '../../images/like.png';
const API_IMG ="http://image.tmdb.org/t/p/w500";


function Card({id,poster_path, title, release_date, vote_average}) {
    return (
        <div className="card">
            <img src={API_IMG+poster_path} alt="" />
            <a href={`/movie/${id}`}><h4>{title.substr(0, 15) + '...'}</h4></a>
            <span>{release_date.substr(0,   4)}</span>
            <div className='card-info'>
                <div className='card-info-rating'>
                    <img src={imdb} alt="" />
                    <span>{vote_average}</span>
                </div>
                <div className='card-info-action'>
                    <img src={eye} alt="" />
                    <img src={like} alt="" />
                </div>
            </div>           
        </div>
    );
}


export default Card;