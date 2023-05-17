import Header from "./components/header";
import Main from "./pages/main";
import Footer from './components/footer';
import { Routes, Route, useLocation} from "react-router-dom";
import {Provider} from 'react-redux'
import configureStore from './store';
import Movie from "./pages/movie";

const store = configureStore()
function App() {
  return (
    <Provider store={store}>
       
      <div className="App">
        <Header />
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/movie/:id' element={<Movie />}/>
            <Route path='/movie/:id/:media' element={<Movie />}/>
          </Routes>
        <Footer />
      </div>
      
    </Provider>
  );
}

export default App;
