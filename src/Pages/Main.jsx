import Header from '../components/Header/Header';
import Menu from '../components/Menu/Menu';
import MovieSection from '../components/MovieSection/MovieSection';
import {useState} from "react";

function Main() {
    const [searchValue, setSearchValue] = useState('');
    return (
        <div className="main">
            <Header setSearchValue={setSearchValue}/>
            <Menu/>
            <MovieSection searchValue = {searchValue}/>
        </div>
    );
}

export default Main;