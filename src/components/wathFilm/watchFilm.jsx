import './index.css';
import IMBD from '../images/home/imdb.png';
import  YouTube  from 'react-youtube';
import  {YouTubePlayer}  from 'react-youtube';
import { useEffect, useState } from 'react';
import Footer from '../footer/footer';
import MovieCast from './movieCast/movieCast';

const IMAGE__PATH = 'https://image.tmdb.org/t/p/';

function WatchMovie ({watchmovie, trailer, cast, crew}) {
    const [list, setList] = useState([false])

      
      const Trailer = () => {
        const trail = trailer.results.find((t)=> t.name == 'Official Trailer') 
        let  key = trail ? trail.key : trailer.results[0].key

        return <YouTube videoId={key}
                        iframeClassName={"youtube"}
                        />
      }

      console.log(trailer)

    return(
        <>
            <div className='movie'>

                <div className='movie__poster' style={{backgroundImage: `linear-gradient(90deg, #000000 17.76%, rgba(0, 0, 0, 0.687449) 41.44%, rgba(196, 196, 196, 0) 100%), url(${IMAGE__PATH}w1280${watchmovie.backdrop_path})`}}>
                    <h1 className='movie__title'>{watchmovie.title}</h1>
                    <p className='movie__overview'>{watchmovie.overview}</p>
                    
                    <div className='movie__other-info'>
                        <div>GENRES</div>
                        {watchmovie.genres ? watchmovie.genres.map((g, i)=>(
                           i !== 0 ? <span>{',  ' + g.name}</span> : <span> {g.name}</span>
                        )) : null}
                    </div>

                        <button className='btn__watch'>Watch <i class='fas fa-play'></i></button>
                        <button className='btn__mylist'>My List {list ? <i class='fas fa-plus'></i>: <i class='fas fa-minus'></i>}</button>

                    <div className='movie__items'>
                        <img src={IMBD} alt="#" />
                        <span className='movie__vote'>{watchmovie.vote_average ? watchmovie.vote_average.toString().slice(0,3) : null}</span>
                        <span className='movie__format'>U/A</span>
                        <span className='movie__format'>4K</span>
                        <span className='movie__release'>{watchmovie.release_date ? watchmovie.release_date.slice(0,4) : null}</span>
                    </div>

                    <div className='movie__other-info'>
                        <div>AUDIO</div>
                        {watchmovie.spoken_languages ? watchmovie.spoken_languages.map((g, i)=>(
                           i !== 0 ? <span>{',  ' + g.english_name}</span> : <span> {g.english_name}</span>
                        )): null}
                    </div>
                    <div className='movie__other-info'>
                        <div>SUBTITLES</div>
                        {watchmovie.spoken_languages ? watchmovie.spoken_languages.map((g, i)=>(
                           i !== 0 ? <span>{',  ' + g.english_name}</span> : <span> {g.english_name}</span>
                        )): null}
                    </div>

                    
                </div>
                <div className='movie__t-c'>
                    <div className="movie__trailer">
                        <h3>Trailer</h3>
                        {trailer.results ? Trailer() : null}
                    </div>
                    <MovieCast cast={cast} crew={crew}/>
                </div>      
                
                    
                <Footer/>
            </div>
            
        </>
    )
}


export default WatchMovie;