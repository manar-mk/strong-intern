import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import Card from './Card';
import Banner from './Banner';
import { useState, useEffect} from 'react';


function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('http://api.themoviedb.org/3/movie/popular?api_key=c396b9d0578d540a49f8b23606c4f054&language=en-US&page=2').then((response)=>{
      console.log(response.data.results)
      setMovies(response.data.results)
    }).catch((err)=>{
      console.log(err)
    })
  }, []);

  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      
      <div className='must_watch'>
        <div className='must_watch-line'>
          <div>MOVIES YOU MUST WATCH</div>
          <div className='must_watch-line-filters_box'>
            <div>FILTERS</div>
            <img src="/images/Vector2.png" className='must_watch-line-filters_box-vector' />
          </div>
        </div>
        <div className="movies_list">
          {!movies.length ? (
          <h1>No Movies Found</h1>
          ) : (
          movies.map((movie) => (
          <Card
            name={movie.title}
            year={movie.release_date}
            rating={movie.vote_average}
            image={movie.poster_path}
            id={movie.id}
            key={movie.id}
          />
          ))
          )}
        </div>
      </div>

      <div className='classics'>
        <div className='classics-line'>RECOMMENDED FOR YOU</div>
        <div className='recom-langs'>
          <div className='recom-langs-item'>Hindi</div>
          <div className='recom-langs-item'>Bengali</div>
          <div className='recom-langs-item'>Marathi</div>
          <div className='recom-langs-item'>Assamese</div>
          <div className='recom-langs-item'>Telugu</div>
          <div className='recom-langs-item'>Tamil</div>
          <div className='recom-langs-item'>Malayalam</div>
        </div>
        <Card></Card>
      </div>

      <div className='classics'>
        <div className='classics-line'>BOLLYWOOD CLASSICS</div>
        <Card></Card>
        <div className='classics-line-outer_more_box'>
        <div className='classics-line-more_box'>
            <div>Show More</div>
            <img src="/images/Vector2.png" className='must_watch-line-filters_box-vector' />
        </div>
        </div>
      </div>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
