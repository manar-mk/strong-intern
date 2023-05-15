import Header from './view/shared-components/Header/Header';
import MainScreen from './view/shared-components/MainScreen/MainScreen';
import MovieList from './view/shared-components/MovieList/MovieList';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <MainScreen />
        <MovieList />
      </div>
    </div>
  );
}

export default App;
