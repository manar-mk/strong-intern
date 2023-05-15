import pause from '../../images/pause.png';
import plus from '../../images/plus.png';
import imdb from '../../images/imdb.png';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import Card from "../Card/Card";
import Footer from '../Footer/Footer';

const API_IMG = "http://image.tmdb.org/t/p/original";
const API_IMG2 = "http://image.tmdb.org/t/p/w300";
const BASE_AXIOS = axios.create({
    baseURL: "https://api.themoviedb.org/3", headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTI2NmQwMjhiNTQ3M2ZmNmU0OGVmZWQ5YmRhOThhZCIsInN1YiI6IjY0NWUyOGMxZDZjMzAwMDE0YWRkYjg4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YOtjNK5RYAgUWC0c6Ww10MId1oGYJtWJ91b2rmcMrhs"
    }
});

function MovieInfo() {
    const {id} = useParams();
    const [movie, setMovie] = useState([]);
    const [logo, setLogo] = useState([]);
    const [cast, setCast] = useState([]);
    const [trailer, setTrailer] = useState([]);
    const [similarMovies, setSimilarMovies] = useState([]);

    async function getMovie(movieId) {
        try {
            const response = await BASE_AXIOS.get(`/movie/${movieId}`);
            const data = await response.data;
            setMovie(data);
        } catch (error) {
            console.log(error);
        }
    }

    async function getCast(movieId) {
        try {
            const response = await BASE_AXIOS.get(`/movie/${movieId}/credits`);
            const data = await response.data;
            setCast(data);
        } catch (error) {
            console.log(error);
        }
    }

    async function getLogo(movieId) {
        try {
            const response = await BASE_AXIOS.get(`/movie/${movieId}/images`);
            const data = await response.data;
            setLogo(data.logos[0]);
        } catch (error) {
            console.log(error);
        }
    }

    async function getTrailer(movieId) {
        try {
            const response = await BASE_AXIOS.get(`/movie/${movieId}/videos`);
            const data = await response.data;
            setTrailer(data.results[0]);
        } catch (error) {
            console.log(error);
        }
    }

    async function getSimilar(movieId) {
        try {
            const response = await BASE_AXIOS.get(`/movie/${movieId}/similar`);
            const data = await response.data;
            setSimilarMovies(data.results);
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        getMovie(id);
        getLogo(id);
        getCast(id);
        getTrailer(id);
        getSimilar(id);
    }, [id]);


    return (
        <div className="section">
            <div className='section-content'>
                <div className='section-background'>
                    <img src={API_IMG + movie.backdrop_path} alt=""/>
                </div>
                <div className='section-container'>
                    <img src={API_IMG + logo.file_path} alt="/"/>
                    <p>{movie.overview}</p>
                    <h5>GENRES</h5>
                    <span>{movie?.genres?.map(genre => genre.name).join(', ')}</span>
                    <div className='section-button'>
                        <button>WATCH <img src={pause} alt=""/></button>
                        <button>MY LIST <img src={plus} alt=""/></button>
                    </div>
                    <div className='section-rating'>
                        <img src={imdb} alt="/"/>
                        <span>{movie?.vote_average}</span>
                        <span>U/A</span>
                        <span>4K</span>
                        <span></span>
                    </div>
                    <h5>AUDIO</h5>
                    <span>{movie.spoken_languages?.map(language => language.english_name).join(', ')}</span>
                    <h5>SUBTITLES</h5>
                    <span>{movie.spoken_languages?.map(language => language.english_name).join(', ')}</span>
                </div>
                <div className='cast-info'>
                    <div>
                        <h5 className='head-title'>TRAILER</h5>
                        <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${trailer.key}`}
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"/>
                    </div>
                    <div>
                        <h5 className='head-title'>CAST AND CREW INFO</h5>
                        <div className='section-cast'>
                            {cast.cast?.slice(0, 5).map((actor, index) => (
                                <div key={index}>
                                    <img src={API_IMG2 + actor.profile_path} alt=""/>
                                    <h5>{actor.name}</h5>
                                    <span>as {actor.character}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='set-movies'>
                <div className='set-movies-filter'>
                    <h4>MORE LIKE THIS</h4>
                </div>
                <Splide options={{
                    type: 'loop',
                    drag: 'free',
                    focus: 'center',
                    perPage: 7,
                    arrows: false,
                    pagination: false,
                    fixedWidth: '168px',
                    gap: '42px',
                }}>
                    {similarMovies.map((movieReq) => <SplideSlide><Card key={movieReq.id} {...movieReq}/></SplideSlide>)}
                </Splide>
            </div>
            <Footer/>
        </div>

    );
}

export default MovieInfo;