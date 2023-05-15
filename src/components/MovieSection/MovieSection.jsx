import imdb from '../../images/imdb.png';
import pause from '../../images/pause.png';
import plus from '../../images/plus.png';
import {useEffect, useState} from 'react';
import Card from '../Card/Card';
import vector from '../../images/Vector.png';
import axios from 'axios';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import Footer from '../Footer/Footer';
import '@splidejs/react-splide/css';

import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

import '@splidejs/react-splide/css/core';

const API_IMG = "http://image.tmdb.org/t/p/original";

const BASE_AXIOS = axios.create({
    baseURL: "https://api.themoviedb.org/3", headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTI2NmQwMjhiNTQ3M2ZmNmU0OGVmZWQ5YmRhOThhZCIsInN1YiI6IjY0NWUyOGMxZDZjMzAwMDE0YWRkYjg4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YOtjNK5RYAgUWC0c6Ww10MId1oGYJtWJ91b2rmcMrhs"
    }
});
const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=e1266d028b5473ff6e48efed9bda98ad";
const API_LOGO = (movieId) => BASE_AXIOS.get(`/movie/${movieId}/images`);

// console.log(API_LOGO(339274));


function MovieSection({searchValue}) {
    const [movies, setMovies] = useState([]);
    const [logos, setLogos] = useState([]);
    const [movie, setMovie] = useState([]);
    const [hindiMovies, setHindiMovies] = useState([]);
    const [recommendedMovies, setRecommendedMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [actors, setActors] = useState([]);
    const [keywords, setKeywords] = useState([]);
    console.log(searchValue)

    async function fetchGenres(searchValue) {
        try {
            const response = await BASE_AXIOS.get("/genre/movie/list");
            const data = await response.data;
            const filteredGenres = data.genres.filter(genre => genre.name.toLowerCase().includes(searchValue.toLowerCase()));
            setGenres(filteredGenres);
        } catch (error) {
            console.log(error);
        }
    }


    async function fetchPerson(searchValue) {
        try {
            const response = await BASE_AXIOS.get("/search/person?query=" + searchValue);
            const data = await response.data;
            setActors(data.results);
        } catch (error) {
            console.log(error);
        }
    }

    async function fetchKeyword(searchValue) {
        try {
            const response = await BASE_AXIOS.get("/search/keyword?query=" + searchValue);
            const data = await response.data;
            console.log(data.results);
            setKeywords(data.results);
        } catch (error) {
            console.log(error);
        }
    }

    async function discoverMovies(genres, actors, keywords) {
        try {
            let params = {};

            if (genres && genres.length > 0) {
                params.with_genres = genres.map(genre => genre.id).join("|");
            }

            if (actors && actors.length > 0) {
                params.with_people = actors.map(actor => actor.id).join("|");
            }

            if (keywords && keywords.length > 0) {
                params.with_keywords = keywords.map(keyword => keyword.id).join("|");
            }

            console.log(params);
            const response = await BASE_AXIOS.get(`/discover/movie`, { params });
            const data = await response.data;
            setMovies(data.results);
        } catch (error) {
            console.log(error);
        }
    }


    async function getMovies() {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setMovies(data.results);
        } catch (error) {
            console.log(error);
        }
    }

    async function getLogo(movieId) {
        try {
            const response = await API_LOGO(movieId);
            const data = await response.data;
            // console.log(data);
            setLogos(data.logos[0]);
        } catch (error) {
            console.log(error);
        }
    }

    async function getMovie(movieId) {
        try {
            const response = await BASE_AXIOS.get(`/movie/${movieId}`);
            const data = await response.data;
            setMovie(data);
        } catch (error) {
            console.log(error);
        }
    }

    async function getHindiMovies() {
        try {
            const response = await BASE_AXIOS.get(`discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_original_language=hi`);
            const data = await response.data;
            setHindiMovies(data.results);
        } catch (error) {
            console.log(error);
        }
    }

    async function getRecommendedMovies(movieId) {
        try {
            const response = await BASE_AXIOS.get(`movie/${movieId}/recommendations?language=en-US&page=1`);
            const data = await response.data;
            // console.log(data);
            setRecommendedMovies(data.results);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getMovies();
        getHindiMovies();
    }, []);

    useEffect(() => {
        if (movies.length > 0) {
            getLogo(movies[0].id);
            getMovie(movies[0].id);
            getRecommendedMovies(movies[0].id);
        }
    }, [movies]);

    useEffect(() => {
        fetchGenres(searchValue);
        fetchPerson(searchValue);
        fetchKeyword(searchValue);
    }, [searchValue]);

    useEffect(() => {
        discoverMovies(genres, actors, keywords);
    }, [genres, actors, keywords]);

    return (
        <div className="section">
            <div className='section-content'>
                <div className='section-background'>
                    <img src={API_IMG + movie.backdrop_path} alt=""/>
                </div>
                <div className='section-container'>
                    <img src={API_IMG + logos?.file_path} alt="/"/>
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
                        <span>{movie?.release_date?.substr(0, 4)}</span>
                    </div>
                </div>
            </div>
            <div className='set-movies'>
                <div className='set-movies-filter'>
                    <h4>MOVIES YOU MUST WATCH</h4>
                    <button>FILTERS <img src={vector} alt=""/></button>
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
                    {movies.map((movieReq) => <SplideSlide><Card key={movieReq.id} {...movieReq}/></SplideSlide>)}
                </Splide>

            </div>
            <div className='set-movies'>
                <div className='set-movies-filter'>
                    <h4>RECOMMENDED FOR YOU</h4>
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
                    {recommendedMovies.map((movieReq) => <SplideSlide><Card
                        key={movieReq.id} {...movieReq}/></SplideSlide>)}
                </Splide>
            </div>
            <div className='set-movies'>
                <div className='set-movies-filter'>
                    <h4>BOLLYWOOD CLASSIC</h4>
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
                    {hindiMovies.map((movieReq) => <SplideSlide><Card key={movieReq.id} {...movieReq}/></SplideSlide>)}
                </Splide>
            </div>
            <Footer/>
        </div>

    );
}

export default MovieSection;