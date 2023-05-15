import Footer from './view/shared-components/Footer/Footer';
import Header from './view/shared-components/Header/Header';
import MainScreen from './view/shared-components/MainScreen/MainScreen';
import MovieList from './view/shared-components/MovieList/MovieList';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="content">
          <Header />
          <MainScreen />
          <MovieList />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
