import { useEffect, useState } from 'react';
import IMBD from '../images/home/imdb.png';

import './index.css';
import Popular from '../popular/popular';
import Footer from '../footer/footer';
const API__KEY = 'api_key=369c8d4a4167dca212dcca01344c3757';
const MovieDB = 'https://api.themoviedb.org/3/';
const IMAGE__PATH = 'https://image.tmdb.org/t/p/';


function Home ({home, movie, toWatchMovie }){
    const [list, setList] = useState([false])
    const [genres, setGenres] = useState([]);

    useEffect(()=>{
        fetch(`${MovieDB}genre/movie/list?${API__KEY}&language=en-US`)
        .then((res) => res.json())
        .then((json) => {
            setGenres(json.genres)
        })
        .catch((err) => {
        console.warn(err);
        alert('Error')
        })
    }, [])

    return (
        <>
            <div className='home'>

                <div className='home__poster' style={{backgroundImage: `linear-gradient(90deg, #000000 17.76%, rgba(0, 0, 0, 0.687449) 41.44%, rgba(196, 196, 196, 0) 100%), url(${IMAGE__PATH}w1280${home.backdrop_path})`}}>
                    <h1 className='home__title'>{home.title}</h1>
                    <p className='home__overview'>{home.overview}</p>
                    <div className='home__genre'>
                        <div>GENRES</div>
                        {home.genre_ids ? genres.map((g,i)=>(    
                                home.genre_ids.includes(g.id) ? <span key={g.id}> {g.name}</span> : null
                        )): null}
                    </div>

                        <button className='btn__watch'>Watch <i class='fas fa-play'></i></button>
                        <button className='btn__mylist'>My List {list ? <i class='fas fa-plus'></i>: <i class='fas fa-minus'></i>}</button>

                    <div className='home__items'>
                        <img src={IMBD} alt="#" />
                        <span className='home__vote'>{home.vote_average ? home.vote_average.toString().slice(0,3) : null}</span>
                        <span className='home__format'>U/A</span>
                        <span className='home__format'>4K</span>
                        <span className='home__release'>{home.release_date ? home.release_date.slice(0,4) : null}</span>
                    </div>

                
                </div>
                <Popular movie={movie} toWatchMovie={toWatchMovie}/>

            </div>
            <Footer/>
        </>
    )
}

export default Home;