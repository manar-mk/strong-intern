import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import WatchMovie from './components/wathFilm/watchFilm';
import Header from './components/header/header';
import Home from './components/home/home';

const API__KEY = 'api_key=369c8d4a4167dca212dcca01344c3757';
const MovieDB = 'https://api.themoviedb.org/3/';

function App() {
  const [movie, setMovie] = useState([]);
  const [home, setHome] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [watchmovie, setWatchMovie] = useState([]);
  const [trailer, setTrailer] = useState([]);
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);

  
  const fetchMovies = (searchValue) =>{
    const type = searchValue ? 'search' : 'discover';
    const query = searchValue ? `query=${searchValue}&` : '';

    fetch(`${MovieDB}/${type}/movie?${query}${API__KEY}`)
    .then((res) => res.json())
    .then((json) => {
      setMovie(json.results);
      setHome(json.results[0]);
    })
    .catch((err) => {
      console.warn(err);
      alert('Error')
    })
  }

  useEffect(()=>{
    fetchMovies();

  }, []);

  const toWatchMovie = (id) =>{
    Promise.all([
      fetch(`${MovieDB}/movie/${id}?${API__KEY}&language=en-US`).then((res) => res.json()),
      fetch(`${MovieDB}/movie/${id}?${API__KEY}&append_to_response=videos`).then((res) => res.json()),
      fetch(`${MovieDB}/movie/${id}/credits?${API__KEY}&language=en-US`).then((res) => res.json()),
    ])
      .then((json) => {
        setTrailer(json[1].videos)
        setWatchMovie(json[0]);
        setCast(json[2].cast)
        setCrew(json[2].crew)
     })
      .catch((err) => {
      console.warn(err);
      alert('Error')
      })  
  };
  return (
    <>
      <Header setSearchValue={setSearchValue} searchValue={searchValue} fetchMovies={fetchMovies}/>

        <Routes>
          <Route path="/" element={<Home home={home} movie={movie} toWatchMovie={toWatchMovie}/>}/>
          <Route path="movie/" element={<WatchMovie watchmovie={watchmovie} trailer={trailer} cast={cast} crew={crew}/>}/>
        </Routes>

    </>
  )
}

export default App;
