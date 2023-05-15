import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import MovieInfo from "../components/MovieInfo/MovieInfo";

function Movie() {
    return (
        <div className="main">
            <Header/>
            <Menu/>
            <MovieInfo/>
        </div>
    );
}

export default Movie;